class CanvasTransformer extends CanvasBubble {
	constructor(lens, width, height, modelSize) {
		super(".layer-transforms", lens, width, height);

		this.modelSize = modelSize;

		this.canvas = InkCanvas2D.createInstance(this.surface, width, height);
		this.originLayer = this.canvas.createLayer(modelSize);

		this.strokeRenderer = new StrokeRenderer2D(this.canvas, modelSize);
	}

	draw(strokes) {
		let dirtyArea;

		this.originLayer.clear();

		if (!this.modelSize)
			this.strokeRenderer.setTransform(this.transform);

		strokes.forEach(stroke => {
			this.strokeRenderer.draw(stroke);
			this.strokeRenderer.blendStroke(this.originLayer);

			if (this.strokeRenderer.strokeBounds)
				dirtyArea = this.strokeRenderer.strokeBounds.union(dirtyArea);
		});

		this.canvas.blend(this.originLayer, {mode: BlendMode.COPY, rect: dirtyArea});
	}

	refresh(transform) {
		if (this.modelSize) {
			if (transform)
				transform = this.transform.multiply(transform);
			else
				transform = this.transform;
		}

		this.canvas.clear();
		this.canvas.blend(this.originLayer, {transform});
	}
}
