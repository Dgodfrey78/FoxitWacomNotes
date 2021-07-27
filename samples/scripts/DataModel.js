class DataModel {
	constructor() {
		this.inkModel = new InkModel();
		this.repository = new DataRepository();
		this.manipulationsContext = new SpatialContext();
	}

	add(stroke) {
		this.manipulationsContext.add(stroke);
		return this.inkModel.addPath(stroke);
	}

	update(intersected, selected = []) {
		let split = this.manipulationsContext.update(intersected);

		split.intersected.forEach(strokeSplit => {
			if (strokeSplit.strokes.length == 0)
				this.remove(strokeSplit.stroke);
			else
				this.inkModel.replacePath(strokeSplit.stroke, strokeSplit.strokes);
		});

		let strokes = this.getStrokes(selected);
		strokes.forEach(stroke => (split.dirtyArea = stroke.bounds.union(split.dirtyArea)));

		this.remove(...strokes);

		return split;
	}

	transform(mat, ...strokes) {
		mat = Matrix.fromMatrix(mat);

		strokes.forEach(stroke => {
			stroke.transform(mat);

			this.manipulationsContext.reload(stroke);
		});
	}

	remove(...strokes) {
		strokes.forEach(stroke => {
			this.manipulationsContext.remove(stroke);
			this.inkModel.removePath(stroke);
		});
	}

	getStrokes(strokeIDs) {
		return strokeIDs.map(strokeID => this.inkModel.getItem(strokeID));
	}

	importModel(inkModel) {
		this.inkModel = inkModel || new InkModel();

		this.inkModel.brushes.forEach(brush => {
			this.repository.register(brush.name, brush);
		});

		this.inkModel.strokes.forEach(stroke => {
			this.manipulationsContext.add(stroke);
		});
	}

	importBrush(brush) {
		this.repository.register(brush.name, brush);
	}

	getBrush(name) {
		return this.repository.getItem(name);
	}

	reset(inkModel) {
		this.manipulationsContext.reset();
		this.importModel(inkModel);
	}
}
