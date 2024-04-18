class MapEvent {
	hoverList = new Map();
	onHoverList = new Map();
	onClickList = new Map();
	constructor(opts) {
		this.view = opts.view;
		this.cursor = opts.cursor ?? "default";
		this.hoverCursor = opts.hoverCursor ?? "pointer";
		this.objectIdField = opts.objectIdField ?? "objectId";
		this._init();
	}
	_init() {
		this.view.on("pointer-move", this._hoverHandler.bind(this));
		this.view.on("immediate-click", this._clickHandler.bind(this));
	}
	_handler(type, eventList, { graphic, mapPoint: point }, $event) {
		let key = graphic?.attributes?.[this.objectIdField] || graphic;
		let cbs = eventList.get(key);
		if (cbs) cbs.forEach((cb, i) => cb({
			type,
			point,
			graphic,
			$event,
			remove: () => cbs[i] == cb && cbs.splice(i, 1)
		}));
	}
	async _hoverHandler(event) {
		let { results } = await this.view.hitTest(event);
		let graphic;
		if (results.length) graphic = results[0].graphic;
		let key = graphic?.attributes?.[this.objectIdField] || graphic;
		if ((!graphic || !this.hoverList.get(key)) && this.view.cursor != this.cursor) {
			this.view.surface.style.cursor = this.view.cursor = this.cursor;
		}
		this.hoverList.forEach((info, g) => {
			if (info.hover) {
				if (g != graphic) {
					g.symbol = info.oSymbol;
					info.hover = false;
				}
			} else {
				if (g == graphic) {
					g.symbol = info.symbol;
					info.hover = true;
					this.view.surface.style.cursor = this.view.cursor = info.options.hoverCursor || this.hoverCursor;
					this._handler("hover", this.onHoverList, results[0], event);
				}
			}
		});
	}
	async _clickHandler(event) {
		let { results } = await this.view.hitTest(event);
		if (results.length) {
			this._handler("click", this.onClickList, results[0], event);
		}
	}
	hover(graphic, symbol, options = {}) {
		let graphics;
		if (graphic instanceof Array) graphics = graphic;
		else graphics = [graphic];
		let removes = graphics.map(graphic => {
			let key = graphic?.attributes?.[this.objectIdField] || graphic;
			this.hoverList.set(key, { symbol, oSymbol: graphic.symbol, hover: false, options });
			return () => this.hoverList.delete(key);
		});
		if (graphic instanceof Array) return removes;
		else return removes[0];
	}
	onHover(graphic, cb) {
		return this.on("hover", graphic, cb);
	}
	onClick(graphic, cb) {
		return this.on("click", graphic, cb);
	}
	on(type, graphic, cb) {
		let graphics, eventList;
		if (graphic instanceof Array) graphics = graphic;
		else graphics = [graphic];
		switch (type) {
			case "hover":
				eventList = this.onHoverList;
				break;
			case "click":
				eventList = this.onClickList;
				break;
		}
		if (eventList) {
			let removes = graphics.map(graphic => {
				let key = graphic?.attributes?.[this.objectIdField] || graphic;
				let cbs = eventList.get(key);
				if (cb instanceof Function) {
					if (cbs && cbs.length) cbs.push(cb);
					else eventList.set(key, cbs = [cb]);
					return () => cbs[cbs.length - 1] == cb && cbs.splice(cbs.length - 1, 1);
				}
			});
			if (graphic instanceof Array) return removes;
			else return removes[0];
		}
	}
	off(type, graphic, cb) {
		let graphics, eventList;
		if (graphic instanceof Array) graphics = graphic;
		else graphics = [graphic];
		switch (type) {
			case "hover":
				eventList = this.onHoverList;
				break;
			case "click":
				eventList = this.onClickList;
				break;
		}
		if (eventList) {
			let status = graphics.map(graphic => {
				let key = graphic?.attributes?.[this.objectIdField] || graphic;
				let cbs = eventList.get(key);
				if (cbs) {
					if (cb === true) return eventList.delete(key);
					let i = cbs.indexOf(cb);
					if (i != -1) {
						cbs.splice(i, 1);
						return true;
					}
					return false;
				}
			});
			if (graphic instanceof Array) return status;
			else return status[0];
		}
	}
	reset(types = ["hover", "onHover", "onClick"]) {
		if(types instanceof Array) {
			return types.map(this.reset.bind(this));
		} else if(typeof types == "string") {
			switch (types) {
				case "hover":
					this.hoverList = new Map();
					return true;
				case "onHover":
					this.onHoverList = new Map();
					return true;
				case "onClick":
					this.onClickList = new Map();
					return true;
			}
			return false;
		}
		return false;
	}
}

export default MapEvent;