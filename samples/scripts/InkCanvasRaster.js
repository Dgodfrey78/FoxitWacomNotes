class InkCanvasRaster extends InkCanvas {
	constructor(canvas, width, height) {
		super();

		this.canvas = InkCanvasGL.createInstance(canvas, width, height);
		this.strokesLayer = this.canvas.createLayer();

		this.strokeRenderer = new StrokeRendererGL(this.canvas);

		this.transform = new Matrix();
	}
}
