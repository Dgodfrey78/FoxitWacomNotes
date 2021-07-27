let dropDown = {
	init: function() {
		$(".DropDown .Paper").on("mousedown", function() {dropDown.selectPaper(this);});

		$(document).on("mouseup", function(e) {
			let parents = $(e.target).parents().toArray();

			if ($("nav .Paper")[0] != e.target && parents.indexOf($(".DropDown .Papers")[0]) == -1) dropDown.hide("Papers");
		});

		$(window).on("resize", function(e) {
			$(".DropDown").css("visibility", "hidden");
		});
	},

	show: function(name) {
		let button = $("nav ." + name.substring(0, name.length-1))[0];
		$(".DropDown." + name).css("left", (button.offsetLeft - 7 - $(".DropDown." + name).width()/2 + button.offsetWidth/2) + "px").css("visibility", "visible");
	},

	hide: function(name) {
		$(".DropDown." + name).css("visibility", "hidden");
	},

	toggle: function(name) {
		if ($(".DropDown." + name).css("visibility") == "hidden")
			this.show(name);
		else
			this.hide(name);
	},

	click: function(item) {
		$(item.parentNode).children().removeClass("Selected");
		$(item).addClass("Selected");
	},

	selectPaper: function(item) {
		this.click(item);
		$("nav .Paper")[0].src = item.src;

		layout.selectPaper(`paper_${item.src.split("_").last}`);
		this.hide("Papers");
	}
};
