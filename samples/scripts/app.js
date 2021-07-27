let app = {
	get downsampling() { return localStorage.getItem("downsampling") == "true" },

	init() {
		let sample = parseInt(localStorage.getItem("sample"));

		if (sample) {
			document.querySelector(".app").className = "app";

			if (sample != 2) document.querySelector(".app").className += " vector";
			if (sample != 1) document.querySelector(".app").className += " raster";

			document.querySelector(".app").style.display = "";
		}
		else
			document.querySelector(".menu").style.display = "";

		window.sample = sample;
	},

	async initInkController() {
		this.model = new DataModel();

		let width = $(".Wrapper").width();
		let height = $(".Wrapper").height();
		let color = layout.extractColor($("nav .Color")[0]);

		let pureGLCanvas = (sample == 2 || sample == 3);
		let canvas = document.querySelector("#canvas");
		canvas.className = pureGLCanvas ? "raster-canvas" : "vector-canvas";

		let glCanvas = new OffscreenCanvas(width, height);

		let inkCanvasVector = pureGLCanvas ? null : new InkCanvasVector(canvas, width, height)
		let inkCanvasRaster = new InkCanvasRaster(pureGLCanvas ? canvas : glCanvas, width, height)

		await BrushPalette.configure(inkCanvasRaster.canvas.ctx);

		let device = await InputDevice.createInstance({"app.id": "will3-sdk-for-ink-web-demo", "app.version": "1.0.0"});

		if (inkCanvasVector) inkCanvasVector.init(device, "pen", color);
		inkCanvasRaster.init(device, "pencil", color);

		let inkCanvas = pureGLCanvas ? inkCanvasRaster : inkCanvasVector;

		Object.defineProperty(app, "inkCanvas", {value: inkCanvas, enumerable: true});
		Object.defineProperty(app, "type", {value: pureGLCanvas ? app.Type.RASTER : app.Type.VECTOR, enumerable: true});

		window.WILL = inkCanvas;

		config.tools.eraser = (sample == 1) ? config.tools.eraserVector : config.tools.eraserRaster;

		layout.selectTool(inkCanvas.toolID);

		InputListener.open(inkCanvas);
	},

	redirect(sample) {
		if (!sample)
			localStorage.removeItem("sample");
		else
			localStorage.setItem("sample", sample);

		location.reload();
	},

	disbaleZoom: function() {
		var keyCodes = [61, 107, 173, 109, 187, 189];

		window.addEventListener("keydown", function(e) {
			if ((e.ctrlKey || e.metaKey) && (keyCodes.indexOf(e.which) != -1))
				e.preventDefault();
		});

		window.addEventListener("DOMMouseScroll", function(e) {
			if (e.cancelable && (e.ctrlKey || e.metaKey))
				e.preventDefault();
		}, {passive: false});

		window.addEventListener("mousewheel", function(e) {
			if (e.cancelable && (e.ctrlKey || e.metaKey))
				e.preventDefault();
		}, {passive: false});

		window.addEventListener("wheel", function(e) {
			if (e.cancelable && (e.ctrlKey || e.metaKey))
				e.preventDefault();
		}, {passive: false});

		// prevents Scribble for iOS
		window.addEventListener("touchmove", function(e) {
			e.preventDefault();
		}, {passive: false});
	}
};

Object.defineEnum(app, "Type", ["VECTOR", "RASTER"]);
