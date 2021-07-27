let layout = {
	init: function() {
		dropDown.init();

		$("nav .Tool").addClass("Button");

		$("nav .Tool").on("click", function() {
			if (this.classList.contains("Selected")) return;

			$("nav .Tool.Selected").removeClass("Selected");
			$(this).addClass("Selected");

			WILL.setTool(this.id);
		});

		$("nav .ColorBox input[type=color]").on("change", function() {
			layout.selectColor(this);
		});

		this.toggleParam("downsampling", true);
	},

	selectTool(id) {
		$(`nav .Tool#${id}`).trigger("click")
	},

	selectColor: function(input) {
		let color = this.extractColor(input);

		$(".ColorBox .Color").css("background-color", input.value);
		WILL.setColor(color);
	},

	selectPaper: function(paper) {
		let sheet = Array.from(document.styleSheets).filter(sheet => sheet.title == "main").first;
		let rule = Array.from(sheet.rules).filter(rule => rule.selectorText == ".Wrapper::before").first;

		rule.style.backgroundImage = `url('/images/papers/${paper}')`;
	},

	updatePaper(transform) {
		let sheet = Array.from(document.styleSheets).filter(sheet => sheet.title == "main").first;
		let rule = Array.from(sheet.rules).filter(rule => rule.selectorText == ".Wrapper::before").first;

		rule.style.transform = transform.toString();
	},

	setPaperSize(width, height) {
		let sheet = Array.from(document.styleSheets).filter(sheet => sheet.title == "main").first;
		let rule = Array.from(sheet.rules).filter(rule => rule.selectorText == ".Wrapper::before").first;

		rule.style.width = `${width}px`;
		rule.style.height = `${height}px`;
	},

	extractColor(node, opacity) {
		let rgba = [];

		if (node.tagName == "INPUT") {
			let value = node.value.substring(1);

			rgba.push(parseInt(value.substring(0, 2), 16));
			rgba.push(parseInt(value.substring(2, 4), 16));
			rgba.push(parseInt(value.substring(4), 16));
			rgba.push(opacity || 1);
		}
		else {
			rgba = eval(node.getStyle("background-color").replace(/rgba?/, "new Array"));
			if (!rgba[3]) rgba[3] = node.getMathStyle("opacity");
		}

		return Color.fromColor(rgba);
	},

	toggleParam(name, init) {
		if (!init) localStorage.setItem(name, !app[name]);

		if (app[name])
			$(`.Button.${name}`).addClass("Selected");
		else
			$(`.Button.${name}`).removeClass("Selected");
	}
};
