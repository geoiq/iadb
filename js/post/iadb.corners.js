var iadb = (function (iadb, $) {

	function corners(radius) {
		var itself = arguments.callee;
		var key = String(radius);

		itself.cache = itself.cache || {};
		if (itself.cache[key]) {
			return itself.cache[key];
		}
		var values = [];
		var r2 = radius * radius;
		for (var i = 0; i <= radius; i++) {
			var value = Math.round(Math.sqrt(1 - i * i / r2) * radius);
			values.push(value);
		}
		itself.cache[key] = values;
		console.log(values);
		return values;
	}
	corners.cache = { '2': [2, 1], '3': [3, 2, 1], '4': [4, 4, 3, 2], '5': [5, 5, 4, 3, 2] };

	function draw(element, radius, where, bg) {
		var values = corners(radius);
		for (var i = 0; i < values.length; i++) {
			var b = 0;
			var t = radius - values[i];
			var line = document.createElement('DIV');
			line.style.position = 'absolute';
			line.style[where] = (radius - i) + 'px';
			line.style.top = t + 'px';
			line.style.bottom = b + 'px';
			line.style.width = 1 + 'px';
			line.style.backgroundColor = bg;
			element.appendChild(line);
		}
	}

	function wrapContent(element, tag) {
		var content = document.createElement(tag);
		while (e = element.firstChild) {
			content.appendChild(e);
		}
		element.appendChild(content);
		return content;
	}

	function applyProperties(object, properties) {
		for (var key in properties) {
			if (properties.hasOwnProperty(key)) {
				object[key] = properties[key];
			}
		}
	}
	function applyStyle(element, style, postfixes) {
		postfixes = postfixes || arguments.callee.postfixes;
		for (var key in style) {
			if (style.hasOwnProperty(key)) {
				var value = style[key];
				if (typeof value === 'number') {
					element.style[key] = style[key] + (postfixes[key] || '');
				} else {
					element.style[key] = style[key];
				}
			}
		}
		return element;
	}
	applyStyle.postfixes = { width: 'px', height: 'px', left: 'px', right: 'px', top: 'px', bottom: 'px', paddingLeft: 'px', paddingRight: 'px' };
	function create(tag, style) {
		return applyStyle(document.createElement(tag), style);
	}

	iadb.corners = function (element, radius) {
		var width = element.clientWidth;
		var content = wrapContent(element, 'div');
		applyStyle(element, { width: 'auto', paddingLeft: radius, paddingRight: radius });
		applyStyle(content, { width: width - radius - radius });
		var container = $(element);
		var bg = container.css('background-color');
		container.css('background-color', 'Transparent');
		content.style.backgroundColor = bg;

		//applyStyle(content, {});

		var left = create('div', { position: 'absolute', width: radius, left: 0, top: 0, bottom: 0 });
		draw(left, radius, 'left', bg);
		element.appendChild(left);

		var right = create('div', { position: 'absolute', width: radius, right: 0, top: 0, bottom: 0 });
		draw(right, radius, 'right', bg);
		element.appendChild(right);
	}

	return iadb;

} (iadb || {}, jQuery));
