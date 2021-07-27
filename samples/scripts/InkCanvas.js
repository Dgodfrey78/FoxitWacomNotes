class InkCanvas extends InkController {
	constructor() {
		super();

		this.builder = new InkBuilder();

		this.builder.onComplete = (pathPart) => {
			if (this.intersector)
				this.erase(pathPart);
			else if (this.selector)
				this.select(pathPart);
			else
				this.draw(pathPart);
		};

		this.dataModel = app.model;
		Object.defineProperty(this, "strokes", {get: () => this.dataModel.inkModel.content, enumerable: true});

		this.codec = new InkCodec();
	}

	init(device, toolID, color) {
		this.device = device;
		this.builder.device = device;

		this.setTool(toolID);
		this.setColor(color);
	}

	setTool(toolID) {
		this.toolID = toolID;

		if (this.toolID == "basic") {
			this.device = this.builder.device;
			this.builder.device = null;
		}
		else
			this.builder.device = this.device;

		this.intersector = config.tools[toolID].intersector;
		this.selector = config.tools[toolID].selector;
	}

	setColor(color) {
		this.color = color;
	}

	registerInputProvider(pointerID, isPrimary) {
		if (this.forward) return this.inkCanvasRaster.registerInputProvider(pointerID, isPrimary);

		if (Array.isArray(pointerID)) {
			// multi-touch should handle all changedTouches and to assign builders for each other
			if (isNaN(this.builder.pointerID))
				this.builder.pointerID = pointerID.first;
		}
		else {
			if (isPrimary)
				this.builder.pointerID = pointerID;
		}
	}

	getInkBuilder(pointerID) {
		if (this.forward) return this.inkCanvasRaster.getInkBuilder(changedTouches);

		if (Array.isArray(pointerID)) {
			if (pointerID.length > 0 && !pointerID.includes(this.builder.pointerID)) return undefined;
			return this.builder;
		}
		else
			return (this.builder.pointerID == pointerID) ? this.builder : undefined;
	}

	reset(sensorPoint) {
		if (this.forward) return this.inkCanvasRaster.reset(sensorPoint);

		let options = config.getOptions(sensorPoint, this.toolID, this.color);

		this.builder.configure(options.inkBulder);
		this.strokeRenderer.configure(options.strokeRenderer);

		if (this.intersector) {
			this.intersector.reset(this.dataModel.manipulationsContext);

			this.builder.pathProducer.togglePrediction(false);
		}
		else
			this.builder.pathProducer.togglePrediction(true);

		if (this.selector)
			this.selector.reset(this.dataModel.manipulationsContext);
	}

	begin(sensorPoint) {
		if (this.forward) return this.inkCanvasRaster.begin(sensorPoint);

		this.reset(sensorPoint);

		this.builder.add(sensorPoint);
		this.builder.build();
	}

	move(sensorPoint) {
		if (this.forward) return this.inkCanvasRaster.move(sensorPoint);

		if (app.downsampling && this.requested) {
			this.builder.ignore(sensorPoint);
			return;
		}

		this.builder.add(sensorPoint);

		if (!this.requested) {
			this.requested = true;

			this.builder.build();

			requestAnimationFrame(() => (this.requested = false));
		}
	}

	end(sensorPoint) {
		if (this.forward) return this.inkCanvasRaster.end(sensorPoint);

		this.builder.add(sensorPoint);
		this.builder.build();
	}

	draw(pathPart) {
		this.drawPath(pathPart);

		if (pathPart.phase == InkBuilder.Phase.END) {
			if (this.strokeRenderer) {
				let stroke = this.strokeRenderer.toStroke(this.builder);
				this.dataModel.add(stroke);

				this.drawOrigin(stroke);
			}
		}
	}

	drawPath(pathPart) {
		this.strokeRenderer.draw(pathPart.added, pathPart.phase == InkBuilder.Phase.END);

		if (pathPart.phase == InkBuilder.Phase.UPDATE) {
			if (!["pencil", "inkBrush"].includes(this.toolID))
				this.strokeRenderer.drawPreliminary(pathPart.predicted);

			let dirtyArea = this.canvas.bounds.intersect(this.strokeRenderer.updatedArea);

			if (dirtyArea) {
				this.canvas.clear(dirtyArea);
				this.canvas.blend(this.strokesLayer, {rect: dirtyArea});

				this.strokeRenderer.blendUpdatedArea();
			}
		}
		else if (pathPart.phase == InkBuilder.Phase.END) {
			if (!this.strokeRenderer.strokeBounds) return;

			let dirtyArea = this.canvas.bounds.intersect(this.strokeRenderer.strokeBounds.union(this.strokeRenderer.updatedArea));

			if (dirtyArea) {
				if (!this.selector && !this.intersector) {
					this.strokeRenderer.blendStroke(this.strokesLayer);
					this.refresh(dirtyArea);
				}
			}
		}
	}

	erase(pathPart) {
		if (this.toolID == "eraserStroke") {
			this.drawPath(pathPart);

			this.intersector.updateSegmentation(pathPart.added);

			if (pathPart.phase == InkBuilder.Phase.END) {
				let intersection = this.intersector.intersectSegmentation(this.builder.getInkPath());
				this.split(intersection);

				this.abort();
			}
		}
		else {
			let intersection = this.intersector.intersect(pathPart.added);
			this.split(intersection);
		}
	}

	split(intersection) {
		let split = this.dataModel.update(intersection.intersected, intersection.selected);
		let dirtyArea = split.dirtyArea;

		if (dirtyArea) {
			dirtyArea.model = true;
			this.redraw(dirtyArea);
		}
	}

	select(pathPart) {
		this.drawPath(pathPart);

		if (this.selection instanceof SelectionVector)
			this.selector.updateSegmentation(pathPart.added);

		if (pathPart.phase == InkBuilder.Phase.END) {
			let stroke = this.strokeRenderer.toStroke(this.builder);

			this.selection.open(stroke, this.selector);

			this.abort();
		}
	}

	abort() {
		if (!this.builder.phase) return;

		let dirtyArea;

		if (this.strokeRenderer.strokeBounds)
			dirtyArea = this.strokeRenderer.strokeBounds.union(this.strokeRenderer.updatedArea);

		this.strokeRenderer.abort();
		this.builder.abort();

		if (dirtyArea)
			this.refresh(dirtyArea);
	}

	resize() {
		let wrapper = document.querySelector(".Wrapper");
		let width = wrapper.offsetWidth;
		let height = wrapper.offsetHeight;

		this.canvas.resize(width, height);
		this.resizeStack(width, height);

		if (this.lens)
			this.lens.focus();

		this.refresh();
	}

	resizeStack(width, height) {
		Array.from(this.canvas.surface.parentNode.querySelectorAll("canvas")).filter(node => node != this.canvas.surface).forEach(canvas => {
			canvas.width = width;
			canvas.height = height;
		});
	}

	redraw(dirtyArea, excludedStrokes = []) {
		let modelArea;
		let viewArea;

		if (dirtyArea) {
			if (this.lens) {
				modelArea = dirtyArea.model ? dirtyArea : this.lens.viewToModel(dirtyArea);
				viewArea = dirtyArea.model ? this.lens.modelToView(dirtyArea) : dirtyArea;
			}
			else {
				modelArea = dirtyArea;
				viewArea = dirtyArea;
			}

			viewArea = viewArea.intersect(this.canvas.bounds);
		}
		else
			viewArea = this.canvas.bounds;

		this.strokesLayer.clear(viewArea);
		this.clearOrigin(modelArea);

		for (let stroke of this.strokes) {
			if (excludedStrokes.includes(stroke)) continue;
			if (!stroke.style.visibility) continue;

			if (!modelArea || stroke.bounds.intersect(modelArea)) {
				if (this.strokeRenderer instanceof StrokeRenderer2D && stroke.brush instanceof BrushGL) {
					this.inkCanvasRaster.strokeRenderer.draw(stroke);
					this.inkCanvasRaster.strokeRenderer.blendStroke(this.strokesLayer, viewArea);

					continue;
				}

				this.strokeRenderer.draw(stroke);
				this.strokeRenderer.blendStroke(this.strokesLayer, viewArea);

				this.drawOrigin(stroke, modelArea);
			}
		}

		this.refresh(viewArea);
	}

	clearOrigin(modelArea) {
		if (app.type == app.Type.RASTER || this.preventOriginRedraw) return;

		this.originLayer.clear(modelArea);
	}

	drawOrigin(stroke, modelArea) {
		if (app.type == app.Type.RASTER || this.preventOriginRedraw) return;

		this.strokeRendererOrigin.draw(stroke);
		this.strokeRendererOrigin.blendStroke(this.originLayer, modelArea);
	}

	refresh(dirtyArea = this.canvas.bounds) {
		this.canvas.clear(dirtyArea);
		this.canvas.blend(this.strokesLayer, {rect: dirtyArea});
	}

	clear() {
		this.clearOrigin();
		this.strokesLayer.clear();
		this.canvas.clear();

		this.dataModel.reset();
		if (this.lens) this.lens.reset();
	}

	import(input, type) {
		let reader = new FileReader();

		if (type == "uim")
			reader.onload = (e) => this.openFile(e.target.result);
		else if (type == "tool")
			reader.onload = (e) => this.importTool(e.target.result);
		else
			throw new Error(`Unknown or missing import type - ${type}`);

		reader.readAsArrayBuffer(input.files[0]);

		input.value = "";
	}

	async importTool(buffer) {
		// Decode serialised tool configuration
		let data = this.codec.decodeTool(buffer);
		let error;

		// Check if the brush is either a vector or particle brush
		if (localStorage.getItem("sample") == 1 && data.brush instanceof BrushGL)
			error = "Tool data provides raster configuration. Select sample different from this one to use it.";
		if (localStorage.getItem("sample") == 2 && data.brush instanceof Brush2D)
			error = "Tool data provides vector configuration. Select sample different from this one to use it.";

		if (error)
			alert(error);
		else {
			let brush = data.brush;

			if (brush instanceof BrushGL) {
				let canvas = this.inkCanvasRaster ? this.inkCanvasRaster.canvas : this.canvas;
				await brush.configure(canvas.ctx);
			}

			config.tools.customTool = {
				brush: brush,
				blendMode: data.blendMode,
				dynamics: data.dynamics,
				statics: data.statics
			};

			this.dataModel.importBrush(brush);

			$("#customTool").removeClass("Disabled");
			layout.selectTool("customTool");
		}
	}

	async encode() {
		return await this.codec.encodeInkModel(this.dataModel.inkModel);
	}

	decode(buffer) {
		return this.codec.decodeInkModel(buffer);
	}

	async save() {
		let buffer = await this.encode();
		fsx.saveAs(buffer, "ink.uim", "application/vnd.wacom-ink.model");
	}

	async openFile(buffer) {
		let inkModel = this.codec.decodeInkModel(buffer);

		let error;

		if (localStorage.getItem("sample") == 1 && inkModel.brushes.filter(brush => brush instanceof BrushGL).length > 0)
			error = "Ink object provides raster configuration. Select sample different from this one to use it.";

		if (localStorage.getItem("sample") == 2 && inkModel.brushes.filter(brush => brush instanceof Brush2D).length > 0)
			error = "Ink object provides vector configuration. Select sample different from this one to use it.";

		if (error) {
			alert(error)
			return;
		}

		this.clear();

		for (let brush of inkModel.brushes) {
			if (brush instanceof BrushGL) {
				let canvas = this.inkCanvasRaster ? this.inkCanvasRaster.canvas : this.canvas;
				await brush.configure(canvas.ctx);
			}
		}

		this.dataModel.importModel(inkModel);
		this.redraw();
	}
}
