const ENDLESS_CANVAS = location.search.includes("endless");
const MIN_SCALE_FACTOR = ENDLESS_CANVAS ? 0.2 : 1;
const MAX_SCALE_FACTOR = 4;

class Lens {
	constructor(canvas, canvasBridge) {
		this.canvas = canvas;
		this.abort = canvasBridge.abort;

		this.canvasBounds = canvas.bounds;
		this.modelBounds = this.canvasBounds;

		let matrix = new Matrix();

		Object.defineProperty(this, "transform", {
			get: function() {
				return matrix;
			},
			set: function(value) {
				if (value == this.transform) return;

				matrix = value;

				canvasBridge.refresh(value);
				canvasBridge.redraw(value);
			},
			enumerable: true
		});

		this.initEvents();
		this.enable();
	}

	initEvents() {
		let lastPoint;

		this.onZoom = this.zoom.bind(this);

		this.onPanStart = function onPanStart(e) {
			if (e.buttons == 2) lastPoint = {x: e.offsetX, y: e.offsetY};
		}.bind(this);

		this.onPan = function onPan(e) {
			if (e.buttons != 2) return;
			// if (!e.ctrlKey && !e.metaKey) return;
			if (e.ctrlKey || e.metaKey) return;

			// pen hover before pan end
			if (!lastPoint) return;

			let delta = {x: e.offsetX - lastPoint.x, y: e.offsetY - lastPoint.y};
			lastPoint = {x: e.offsetX, y: e.offsetY};

			this.pan(delta);
		}.bind(this);

		this.onPanEnd = function onPanEnd(e) {
			lastPoint = null;
		}.bind(this);

		let pincher = PinchEvent.register(this.canvas.surface);
		pincher.reset(new Point(0, 0));

		this.onPinchStart = function onPinchStart(e) {
			this.abort();
		}.bind(this);

		this.onPinch = function onPinch(e) {
			this.zoom(e.detail.anchor, e.detail.scale);
			this.pan(e.detail.translation);
		}.bind(this);
	}

	enable() {
		this.canvas.surface.addEventListener("wheel", this.onZoom, {passive: true});

		this.canvas.surface.addEventListener("mousedown", this.onPanStart);
		this.canvas.surface.addEventListener("mousemove", this.onPan);
		this.canvas.surface.addEventListener("mouseup", this.onPanEnd);

		this.canvas.surface.addEventListener("pinchstart", this.onPinchStart);
		this.canvas.surface.addEventListener("pinch", this.onPinch);
	}

	disable() {
		this.canvas.surface.removeEventListener("wheel", this.onZoom);

		this.canvas.surface.removeEventListener("mousedown", this.onPanStart);
		this.canvas.surface.removeEventListener("mousemove", this.onPan);
		this.canvas.surface.removeEventListener("mouseup", this.onPanEnd);

		this.canvas.surface.removeEventListener("pinchstart", this.onPinchStart);
		this.canvas.surface.removeEventListener("pinch", this.onPinch);
	}

	zoom(e, scaleFactor) {
		let pos = scaleFactor ? e : {x: e.offsetX, y: e.offsetY};
		let factor = scaleFactor ? scaleFactor : (e.deltaY > 0) ? 0.97 : 1.03;

		if (this.transform.a * factor < MIN_SCALE_FACTOR)
			factor = MIN_SCALE_FACTOR / this.transform.a;
		else if (this.transform.a * factor > MAX_SCALE_FACTOR)
			factor = MAX_SCALE_FACTOR / this.transform.a;

		let scale = this.transform.scale(factor, pos);

		if ((this.transform.a == MIN_SCALE_FACTOR && scale.a < MIN_SCALE_FACTOR) || (this.transform.a == MAX_SCALE_FACTOR && scale.a > MAX_SCALE_FACTOR))
			return;

		let sx = scale.a;
		let sy = scale.d;

		if (scale.a < MIN_SCALE_FACTOR) {
			sx = MIN_SCALE_FACTOR;
			sy = MIN_SCALE_FACTOR;
		}
		else if (scale.a > MAX_SCALE_FACTOR) {
			sx = MAX_SCALE_FACTOR;
			sy = MAX_SCALE_FACTOR;
		}

		if (scale.a != sx || scale.d != sy)
			scale = Matrix.fromMatrix({a: sx, b: scale.b, c: scale.c, d: sy, tx: scale.tx, ty: scale.ty});

		this.focus(scale);
	}

	pan(delta) {
		let translation = this.transform.translate(delta);

		this.focus(translation);
	}

	focus(candidateTransform = this.transform) {
		if (ENDLESS_CANVAS) {
			this.transform = candidateTransform;
			return;
		}

		let visibleArea = this.viewToModel(this.canvas.bounds, candidateTransform);

		let tx = 0;
		let ty = 0;

		// scale above 1 or equals
		if (this.transform.a >= 1) {
			if (visibleArea.left < 0) tx = -visibleArea.left;
			if (visibleArea.top < 0) ty = -visibleArea.top;

			if (visibleArea.width + candidateTransform.tx < this.modelBounds.width && visibleArea.right > this.modelBounds.width) tx = this.modelBounds.width - visibleArea.right;
			if (visibleArea.height + candidateTransform.ty < this.modelBounds.height && visibleArea.bottom > this.modelBounds.height) ty = this.modelBounds.height - visibleArea.bottom;
		}
		else {
			if (this.modelBounds == this.canvasBounds) {
				if (visibleArea.left > 0) tx = -visibleArea.left;
				if (visibleArea.top > 0) ty = -visibleArea.top;
				if (visibleArea.right < this.modelBounds.width) tx = this.modelBounds.width - visibleArea.right;
				if (visibleArea.bottom < this.modelBounds.height) ty = this.modelBounds.height - visibleArea.bottom;
			}
		}

		if (tx != 0 || ty != 0) {
			tx *= candidateTransform.a;
			ty *= candidateTransform.d;

			this.transform = Matrix.fromMatrix({a: candidateTransform.a, b: candidateTransform.b, c: candidateTransform.c, d: candidateTransform.d, tx: candidateTransform.tx - tx, ty: candidateTransform.ty - ty});
		}
		else
			this.transform = candidateTransform;
	}

	reset() {
		this.transform = new Matrix();
	}

	modelToView(modelRect, transform = this.transform) {
		if (transform.isIdentity)
			return modelRect;
		else
			return modelRect.transform(transform);
	}

	viewToModel(viewRect, transform = this.transform) {
		if (transform.isIdentity)
			return viewRect;
		else
			return viewRect.transform(transform.invert());
	}
}
