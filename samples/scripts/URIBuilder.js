let URIBuilder = {
	// host: location.host.split(":").first.split(".").first,
	host: "will3-sdk-for-ink-web-demo",

	// type - raster | vector
	getBrushURI(type, name) {
		return `app://${this.host}/${type}-brush/${name}`;
	},

	// type - shape | fill
	getBrushImageURI(type, name) {
		return `app://${this.host}/raster-brush-${type}/${name}`;
	},

	getBrushPrototypeURI(name, query = "") {
		return `app://${this.host}/vector-brush-shape/${name}${query ? "?" : ""}${query}`;
	},

	// type - remap | resolve
	getActionURI(type, name, query = "") {
		return `app://${this.host}/action-${type}/${name}${query ? "?" : ""}${query}`;
	}
};
