let SelectionListener = {
	timeout: 50,
	repository: [],
	contextMenuActive: false,

	stack: [],
	activeSurface: undefined,

	add(selection) {
		this.repository.push(selection);
		this.attachCanvasContextMenu(selection);
	},

	remove(selection) {
		this.repository.remove(selection);
	},

	activate(surface) {
		this.activeSurface = surface;
		this.stack.push(surface);
	},

	deactivate(surface) {
		this.stack.remove(surface);
		this.activeSurface = this.stack.last;
	},

	attachCanvasContextMenu(selection) {
		if (!selection.canvasSelector) return;

		$(`.${selection.canvasSelector}`).on("mousedown", function(e) {
			if (e.buttons != 2) return;
			// if (e.ctrlKey || e.metaKey) return;
			if (!e.ctrlKey && !e.metaKey) return;

			$(`.${selection.canvasSelector}`).contextMenu({x: e.pageX, y: e.pageY});

			e.preventDefault();
			e.stopPropagation();
		});

		$.contextMenu({
			selector: `.${selection.canvasSelector}`,
			trigger: "none",
			build: ($trigger, e) => {
				if (this.repository.filter(selection => selection.active).length > 0) return false;

				if (isNaN(e.offsetX) || isNaN(e.offsetY)) {
					let offset = $trigger.offset();

					e.offsetX = e.pageX - offset.left;
					e.offsetY = e.pageY - offset.top;
				}

				let pos = {x: e.offsetX, y: e.offsetY};
				let selectionImage = this.repository.filter(selection => selection.constructor.name == "SelectionImage").first;

				let activeSurface = this.activeSurface;
				let zIndex;

				if (activeSurface)
					zIndex = activeSurface.style.zIndex;

				return {
					hideOnSecondTrigger: true,
					callback: (key, options) => selection[key](pos),
					events: {
						show() {
							if (activeSurface)
								activeSurface.style.zIndex = "";
						},
						hide() {
							if (activeSurface)
								activeSurface.style.zIndex = zIndex;
						}
					},
					items: {
						paste: {name: "Paste", icon: "paste", disabled: !selection.clipboard},
						pasteImage: {
							name: "Paste Image",
							visible: !!selectionImage,
							disabled: selectionImage && !selectionImage.clipboard,
							callback: () => selectionImage.paste(pos)
						},
						sep: "---------",
						import: {
							name: "Import",
							callback: () => {
								let input = selection.frame.querySelector(selection.importSelector);

								input.onchange = async (e) => {
									let data = await selection.read(e.target);
									selection.import(new Uint8Array(data), pos);
								}

								input.click();
							}
						},
						importImage: {
							name: "Import Image",
							visible: !!selectionImage,
							callback: () => {
								let input = selectionImage.frame.querySelector(selectionImage.importSelector);

								input.onchange = async (e) => {
									let data = await selectionImage.read(e.target);
									selectionImage.import(new Uint8Array(data), pos);
								}

								input.click();
							}
						}
					}
				};
			}
		});
	},

	close(e) {
		setTimeout(() => {
			if (this.contextMenuActive) return;

			this.repository.forEach(selection => {
				if (selection.active && !selection.frame.contains(e.target))
					selection.close();
			});
		}, this.timeout);
	}
};

document.addEventListener("pointerdown", SelectionListener.close.bind(SelectionListener));
