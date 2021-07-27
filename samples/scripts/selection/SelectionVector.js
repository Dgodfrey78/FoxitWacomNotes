class SelectionVector extends Selection {
	constructor(dataModel, canvasBridge, options) {
		super(canvasBridge.lens, options);

		this.dataModel = dataModel;
		this.canvasBridge = canvasBridge;

		this.canvasTransformer = new CanvasTransformer(canvasBridge.lens, canvasBridge.canvas.width, canvasBridge.canvas.height);
		this.codec = new InkCodec();

		this.strokes = [];

		this.canvasSelector = this.canvasBridge.canvas.surface.className;
		this.selectionSelector = ".selection-vector";
		this.importSelector = ".import-file";
	}

	open(stroke, selector) {
		let selection = selector.select(stroke);

		if (selection.selected.length == 0 && Object.keys(selection.intersected).length == 0) {
			console.warn("data not found");
			return;
		}

		let bounds;
		let path;

		if (selector.mode == Selector.Mode.WHOLE_STROKE) {
			this.strokes = this.dataModel.getStrokes(selection.selected);

			this.strokes.forEach(stroke => {
				bounds = stroke.bounds.union(bounds);
			});

			this.canvasTransformer.draw(this.strokes);
		}
		else {
			this.selection = selection;

			bounds = stroke.bounds;
			path = stroke.points;
		}

		super.open(bounds, path);
	}

	openData(strokes, pos) {
		let bounds;

		this.strokes = strokes.slice();

		this.strokes.forEach(stroke => {
			if (pos) this.dataModel.add(stroke);
			bounds = stroke.bounds.union(bounds);
		});

		this.canvasTransformer.draw(this.strokes);
		super.open(bounds, undefined, pos);

		if (pos)
			this.canvasTransformer.show();
	}

	beginTransform() {
		if (this.selection) {
			this.splitArea = this.split();
			// history.add();

			if (this.strokes.length == 0) this.close();
		}

		if (this.type == Selection.Type.PATH)
			this.canvasTransformer.draw(this.strokes);

		this.canvasBridge.redraw(this.splitArea || this.bounds, this.strokes);

		if (this.strokes.length > 0)
			this.canvasTransformer.show();
	}

	transform() {
		let dirtyArea = this.splitArea || this.dirtyArea;
		delete this.splitArea;

		this.canvasTransformer.refresh(this.lastTransform);
	}

	split() {
		let selected = this.dataModel.getStrokes(this.selection.selected);

		let split = this.dataModel.update(this.selection.intersected);
		let dirtyArea = split.dirtyArea;

		for (let stroke of selected)
			dirtyArea = stroke.bounds.union(dirtyArea);

		selected.push(...split.selected);

		this.strokes = selected;
		delete this.selection;

		return dirtyArea.transform(this.lens.transform);
	}

	completeTransform() {
		let modelTransform = this.lens.transform.multiply(this.lastTransform).multiply(this.lens.transform.invert());
		this.dataModel.transform(modelTransform, ...this.strokes);

		let dirtyArea = this.bounds.transform(this.lastTransform).ceil();
		this.canvasBridge.redraw(dirtyArea);
	}

	changeStrokesColor(color) {
		// history.add();

		if (!this.lastTransformArea) {
			this.beginTransform();
			this.lastTransformArea = this.bounds.transform(this.lastTransform);

			if (!this.lastTransform)
				this.lastTransform = new Matrix();
		}

		this.strokes.forEach(stroke => (stroke.color = color));

		this.canvasTransformer.draw(this.strokes);
		this.canvasTransformer.refresh(this.lastTransform);
	}

	copy(cut) {
		let strokes;

		this.close(() => {
			if (this.selection) {
				if (cut) {
					this.dirtyArea = this.split();

					strokes = this.strokes.clone();
				}
				else {
					strokes = this.dataModel.getStrokes(this.selection.selected).clone();

					let intersected = this.selection.intersected;

					this.dataModel.getStrokes(Object.keys(intersected)).forEach(stroke => {
						intersected[stroke.id].intervals.filter(interval => interval.inside).forEach(interval => {
							strokes.push(stroke.subStroke(interval));
						});
					});
				}
			}
			else
				strokes = this.strokes.clone();

			if (cut)
				this.delete();
		});

		delete this.clipboard;
		if (strokes.length > 0) this.clipboard = strokes;
	}

	paste(pos) {
		this.openData(this.clipboard.clone(), pos);
	}

	delete() {
		// history.add();

		let dirtyArea = this.selection ? this.split() : this.dirtyArea || this.bounds;

		this.dataModel.remove(...this.strokes);
		this.strokes.clear();

		this.canvasBridge.redraw(dirtyArea);

		this.close();
	}

	export() {
		this.close(() => {
			let data = this.codec.encodeInkData(this.strokes);
			fsx.saveAs(data, "selection.ink", "application/protobuf; proto=WacomInkFormat3.InkData");
		});
	}

	import(input, pos) {
		let strokes = this.codec.decodeInkData(input);
		this.openData(strokes, pos);
	}

	reset() {
		super.reset();

		delete this.selection;

		this.strokes.clear();
		this.canvasTransformer.hide();
	}
}
