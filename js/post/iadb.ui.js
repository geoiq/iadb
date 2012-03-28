var iadb = (function (iadb, window, $, undefined) {

	(iadb['Ui'] = function (map) {
		if (!map) debugger;
		this.map = map;
	}).prototype = {
		initialize: function (options) {
			this.initializeZoom();
			if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
				this.applyCorners();
			}
		},
		applyCorners: function () {
			$('.corners').each(function () {
				iadb.corners(this, 10);
			});
		},
		initializeZoom: function () {
			var map = this.map;
			var f1 = map.f1;
			f1.setMapStyle({ infowindow: { visible: false} });
			f1.setMapStyle({ zoom: { expanded: true, horizontal: false} });
		}
	};


	return iadb;
} (iadb || {}, window, jQuery));
