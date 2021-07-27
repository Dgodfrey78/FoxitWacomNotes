app.disbaleZoom();

document.querySelector(":root").style.setProperty("--view-height", window.innerHeight + "px");
window.addEventListener("resize", () => document.querySelector(":root").style.setProperty("--view-height", window.innerHeight + "px"));

addEventListener("DOMContentLoaded", async (event) => {
	let pkg = await fsx.loadFile("/package.json", "json")

	document.getElementById("APPName").textContent = pkg.productName;
	document.getElementById("APPVersion").textContent = pkg.version;
	document.getElementById("SDKVersion").textContent = version;

	$(".app").css("visibility", "hidden");
	app.init();

	if (!localStorage.getItem("sample")) return;

	layout.init();

	await app.initInkController();
	$(".app").css("visibility", "");
});
