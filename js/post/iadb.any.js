var iadb = (function (module, Math) {
	var sub = module['any'] = {
		"int": function (from, to) {
			return from + Math.round((to - from) * Math.random());
		},
		item: function (array) {
			return array[sub['int'](0, array.length - 1)];
		}
	}
	return module;
} (iadb || {}, Math));
