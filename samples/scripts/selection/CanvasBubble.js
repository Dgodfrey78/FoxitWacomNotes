class CanvasBubble {
	constructor(selector, lens, width, height) {
		this.surface = document.querySelector(selector);
		this.ctx = this.surface.getContext("2d");

		this.surface.width = width;
		this.surface.height = height;

		this.surface.addEventListener("contextmenu", (e) => document.querySelector(".vector-canvas").dispatchEvent(new MouseEvent(e.type, e)));

		Object.defineProperty(this, "bounds", {get: () => new DOMRect(0, 0, this.surface.width, this.surface.height), enumerable: true});
		Object.defineProperty(this, "transform", {get: () => lens.transform, enumerable: true});
	}

	show() {
		this.activate();

		this.surface.style.display = "";
	}

	hide() {
		this.surface.style.display = "none";

		this.deactivate();
		this.ctx.clearCanvas();
	}

	activate() {
		this.surface.style.zIndex = "1";

		SelectionListener.activate(this.surface);
	}

	deactivate() {
		this.surface.style.zIndex = "";

		SelectionListener.deactivate(this.surface);
	}
}
