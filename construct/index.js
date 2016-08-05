

let Construct = () => Construct.extend.bind(Construct, arguments);

assign(Construct, {
	instance () {
		var inst = new this();
		return inst;
	},

	extend (staticProperties, instanceProperties) {

		let klass, proto, prototype;

		if (arguments.length === 2) {
			klass = staticProperties;
			proto = instanceProperties;
		} else if (arguments.length == 1) {
			klass = null;
			proto = staticProperties;
		} else {
			klass = null;
			proto = {};
		}

		prototype = this.instance();


	}

});