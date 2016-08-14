

const xEvent = {

	addEventListener (ev, handler) {
		let allEvents = this.bindEvents || this.bindEvent = {},
			eventList = allEvents[ev] || allEvents[ev] = [];

		eventList.push({
			handler: handler,
			type: ev
		});
		return this;
	},

	removeEventListener (ev) {
		if (!this.bindEvents) {
			return this;
		}
		let eventList = this.bindEvents[ev] || [],
			i = 0;
		while (i < eventList.length) {
			eventList.splice(i, 1);
		}
		return this;
	},

	disPatchEvent (ev, args) {
		if (!this.bindEvents) {
			return;
		}
		let handlers = this.bindEvents[ev];
		handlers = !!handlers ? handlers : return,
		let i = 0;
		while(i < handlers.length) {
			handlers[i].handle.apply(this, [ev, args]);
		}
	}

};

export default xEvent;