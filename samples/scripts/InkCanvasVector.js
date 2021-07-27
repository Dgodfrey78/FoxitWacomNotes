class InkCanvasVector extends InkCanvas {
	constructor(canvas, width, height) {
		super();

		this.canvas = InkCanvas2D.createInstance(canvas, width, height);
		this.strokesLayer = this.canvas.createLayer();
		this.originLayer = this.canvas.createLayer();

		this.strokeRenderer = new StrokeRenderer2D(this.canvas);

		this.strokeRendererOrigin = new StrokeRenderer2D(this.canvas);
		this.strokeRendererOrigin.layer.resize(this.originLayer.width, this.originLayer.height);

		this.lens = new Lens(this.canvas, {
			refresh: transform => {
				this.canvas.clear();
				this.canvas.blend(this.originLayer, {transform});

				layout.updatePaper(transform);
			},
			redraw: utils.debounce(transform => {
				this.preventOriginRedraw = true;

				this.strokeRenderer.setTransform(transform);
				this.redraw();

				this.preventOriginRedraw = false;
			}, 300),
			abort: this.abort.bind(this)
		});

		this.lens.modelBounds = this.originLayer.bounds;
		layout.setPaperSize(this.originLayer.width, this.originLayer.height);

		this.selection = new SelectionVector(this.dataModel, {
			lens: this.lens,
			canvas: this.canvas,
			redraw: this.redraw.bind(this)
		});

		this.selection.connect();

		Object.defineProperty(this, "transform", {get: () => this.lens.transform, set: value => (this.lens.transform = value), enumerable: true});
	}

	setTool(toolID) {
		super.setTool(toolID);

		if (config.getBrush(toolID) instanceof BrushGL) {
			this.inkCanvasRaster.setTool(this.toolID);
			this.forward = true;
		}
		else
			this.forward = false;
	}
}
