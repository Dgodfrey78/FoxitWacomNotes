class Selection {
	constructor(lens, options = {}) {
		this.active = false;

		this.frame = null;
		this.frameSelector = null;

		this.lens = lens;

		this.delta = options.delta;
		this.minWidth = options.minWidth || 80;
		this.minHeight = options.minHeight || 80;
		this.strokeWidth = options.strokeWidth || 1;

		this.onTransformStart = this.onTransformStart.bind(this);
		this.onTransform = this.onTransform.bind(this);
		this.onTransformEnd = this.onTransformEnd.bind(this);
	}

	connect(frameSelector = this.selectionSelector) {
		if (this.frame) throw new Error("Selection is already connected");

		this.frameSelector = frameSelector;
		this.frame = document.querySelector(frameSelector);

		if (this.frame.mounted) throw new Error("Selection is already connected");
		this.frame.mounted = true;

		this.frame.innerHTML = this.html();

		this.frame.querySelector(".drag-handle").style.display = "none";

		this.transformer = TransformEvent.register(this.frame, {
			translate: true,
			rotate: true,
			scale: true,
			delta: this.delta,
			minWidth: this.minWidth,
			minHeight: this.minHeight,
			keepRatio: true,
			// translateHandle: this.frame.querySelector(".drag-handle")
			rotateHandles: [
				this.frame.querySelector(".rotate-handle.top"),
				this.frame.querySelector(".rotate-handle.bottom")
			]
		});

		this.frame.addEventListener("transformstart", this.onTransformStart);
		this.frame.addEventListener("transform", this.onTransform);
		this.frame.addEventListener("transformend", this.onTransformEnd);

		SelectionListener.add(this);

		this.linkContextMenu();
	}

	html() {
		const dragHandleImage = "/images/selection/btn_move.png";
		const topHandleImage = "/images/selection/btn_rotate_top.png";
		const bottomHandleImage = "/images/selection/btn_rotate_bottom.png";

		return `
			<div class="FlexWrapper">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1">
					<path stroke-miterlimit="1" />
				</svg>
				<div class="drag-handle">
					<img src="${dragHandleImage}" alt="" />
				</div>
				<div class="rotate-handle top">
					<img src="${topHandleImage}" alt="" />
				</div>
				<div class="rotate-handle bottom">
					<img src="${bottomHandleImage}" alt="" />
				</div>

				<input type="color">
				<input type="file" class="import-file" accept="application/protobuf; proto=WacomInkFormat3.InkData" />
				<input type="file" class="import-image" accept="image/*" />
			</div>
		`;
	}

	linkContextMenu() {
		$.contextMenu({
			selector: this.frameSelector,
			hideOnSecondTrigger: true,
			events: {
				show() {
					SelectionListener.contextMenuActive = true;
				},
				hide() {
					setTimeout(() => {
						SelectionListener.contextMenuActive = false;
					}, SelectionListener.timeout + 5);
				}
			},
			callback: (key, options) => this[key](),
			items: {
				cut: {name: "Cut", icon: "cut"},
				copy: {name: "Copy", icon: "copy"},
				delete: {name: "Delete", icon: "delete"},
				sep: "---------",
				changeColor: {
					name: "Change color",
					visible: typeof this.changeStrokesColor == "function",
					callback: (key, opt, e) => {
						let input = this.frame.querySelector("input[type=color]");
						input.style.left = e.offsetX + "px";
						input.style.top = e.offsetY + "px";

						input.onchange = (e) => this.changeStrokesColor(Color.fromColor(e.target.value));
						input.click();
					}
				},
				export: {name: "Export"}
			}
		});
	}

	onTransformStart(e) {
		this.lastOrigin = e.detail.origin;

		// this.frame.transform = this.lens.transform;

		this.beginTransform();
	}

	onTransform(e) {
		if (!this.active) return;

		let lastTransformArea = this.lastTransformArea;

		this.lastTransform = e.detail.transform;
		this.lastTransformArea = this.bounds.transform(this.lastTransform);
		this.dirtyArea = this.lastTransformArea.union(lastTransformArea).ceil();

		this.transform(e.detail.delta);
	}

	onTransformEnd() {}

	disconnect() {
		if (!this.frame || !this.frame.mounted) return;

		this.frame.removeEventListener("transformstart", this.onTransformStart);
		this.frame.removeEventListener("transform", this.onTransform);
		this.frame.removeEventListener("transformend", this.onTransformEnd);

		TransformEvent.unregister(this.frame);

		delete this.frame;
		delete this.clipboard;

		SelectionListener.remove(this);
	}

	open(bounds, path, pos, state) {
		bounds = bounds.ceil(true);

		if (bounds.width < this.minWidth || bounds.height < this.minHeight)
			bounds = new Rect(bounds.left, bounds.top, Math.max(this.minWidth, bounds.width), Math.max(this.minHeight, bounds.height));

		if (!this.lens.transform.isIdentity) {
			bounds = bounds.transform(this.lens.transform);

			if (path) {
				path = new InkPath2D(path.clone());

				path.transform(this.lens.transform);
				path = path.first;
			}

			if (state) {
				state.origin = state.origin.transform(this.lens.transform);
				state.transform = state.transform.multiply(this.lens.transform);
			}
		}

		this.type = path ? Selection.Type.PATH : Selection.Type.RECT;
		this.bounds = bounds;
		this.path = path || Rect.fromRect(bounds).toPath().points;

		let translate;

		if (pos) {
			let center = state ? DOMPoint.fromPoint(bounds.center).transform(state.transform) : bounds.center;

			let offsetX = pos.x - center.x;
			let offsetY = pos.y - center.y;

			translate = DOMMatrix.fromTranslate({x: offsetX, y: offsetY});
		}

		this.showFrame(bounds, translate, state);
	}

	showFrame(bounds, translate, state) {
		let path = [];

		for (let i = 2; i < this.path.length - 2; i += 2) {
			let x = this.path[i];
			let y = this.path[i+1];

			path.push(`${x},${y}`);
		}

		this.frame.querySelector("svg").setAttribute("viewBox", bounds.left + " " + bounds.top + " " + bounds.width + " " + bounds.height);
		this.frame.querySelector("path").setAttribute("d", "M " + path.join(" L ") + " Z");
		this.frame.querySelector("path").style.strokeWidth = this.strokeWidth;

		this.frame.classList.add(`selection-${this.type}`);

		this.active = true;

		this.lens.disable();
		InputListener.stop();

		this.transformer.open(this.bounds, translate, state);
	}

	/**
	 * Before first transform
	 */
	beginTransform() {
		throw new Error("This method is abstract and should be implemented");
	}

	/**
	 * Apply transformation
	 */
	transform(delta) {
		throw new Error("This method is abstract and should be implemented");
	}

	/**
	 * Before hide transform frame
	 */
	completeTransform() {
		throw new Error("This method is abstract and should be implemented");
	}

	async close(onClose) {
		if (!this.active) return;

		this.hideFrame();

		if (this.lastTransformArea)
			await this.completeTransform();

		if (onClose)
			await onClose();

		this.reset();
	}

	hideFrame() {
		this.transformer.close();

		this.frame.classList.remove(`selection-${this.type}`);

		this.active = false;

		this.lens.enable();
		InputListener.start();
	}

	cut() {
		this.copy(true);
	}

	copy(cut) {
		throw new Error("This method is abstract and should be implemented");
	}

	paste(pos) {
		throw new Error("This method is abstract and should be implemented");
	}

	delete() {
		throw new Error("This method is abstract and should be implemented");
	}

	import(data, pos) {
		throw new Error("This method is abstract and should be implemented");
	}

	async read(input) {
		let reader = new FileReader();

		return new Promise((resolve, reject) => {
			reader.onload = (e) => resolve(e.target.result);
			reader.readAsArrayBuffer(input.files[0]);

			input.value = "";
		});
	}

	export() {
		throw new Error("This method is abstract and should be implemented");
	}

	reset() {
		this.type = null;
		this.bounds = null;
		this.path = null;

		this.lastOrigin = null;
		this.lastTransform = null;
		this.lastTransformArea = null;
		this.dirtyArea = null;
	}
}

Selection.Type = {RECT: "rect", PATH: "path"};
