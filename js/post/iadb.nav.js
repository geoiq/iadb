var iadb = (function (iadb, window, undefined) {

	(iadb['Nav'] = function (crossroads, hasher, map) {
		this.map = map;
		this.mapSignals = map.mapSignals;
		this.crossroads = crossroads;
		this.hasher = hasher;
		this.language = iadb.getCurrentLanguage();
		this.country = iadb.getCurrentCountry().name;
		this.zoom = map.getZoom();
		var center = map.f1.getCenter();
		this.centerLat = center.lat;
		this.centerLon = center.lon;
		var mapuniqueName = this.map.getBasemap().uniqueName || "google_road";
		var basemap = this.map.getMapByUniqueName(mapuniqueName);
		this.basemap = basemap ? basemap.id : 414;
		this.hash = "";
	}).prototype = {
		startListening: function (vm) {
			this.vm = vm;
			var crossroads = this.crossroads;
			var hasher = this.hasher;

			crossroads.addRoute('').matched.add(function () { this.dispatch(this.language, this.country, this.zoom, this.centerLat, this.centerLon, this.basemap, vm.unpickProject, vm) }, this)
			crossroads.addRoute('iadb/{language}/{country}/').matched.add(function (language, country) { this.dispatch(language, country, this.zoom, this.centerLat, this.centerLon, this.basemap, vm.unpickProject, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickProject, vm) }, this)
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/project/{projectId}').matched.add(function (language, country, zoom, centerLat, centerLon, basemap, projectId) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.pickProject, vm, projectId) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/result/{resultId}').matched.add(function (language, country, zoom, centerLat, centerLon, basemap, resultId) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.pickResult, vm, resultId) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/all-projects').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickProject, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/all-sectors').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickSector, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/all-results').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickOutput, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/filter/{mode}/{filter}').matched.add(function (language, country, zoom, centerLat, centerLon, basemap, mode, filter) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.applyFilters, vm, mode, filter) }, this);

			var vmSignals = vm.mainSignals;
			vmSignals.projectPicked.add(function (projectId) { this.setHash('project/' + projectId); }, this);
			vmSignals.resultPicked.add(function (resultId) { this.setHash('result/' + resultId); }, this);
			vmSignals.projectUnpicked.add(function () { this.setHash('all-projects'); }, this);
			vmSignals.sectorUnpicked.add(function () { this.setHash('all-sectors'); }, this);
			vmSignals.outputUnpicked.add(function () { this.setHash('all-results'); }, this);
			vmSignals.filterResults.add(function (filter) { this.setHash('filter/results/' + filter); }, this);
			vmSignals.filterSectors.add(function (filter) { this.setHash('filter/sectors/' + filter); }, this);
			vmSignals.filterProjects.add(function (filter) { this.setHash('filter/projects/' + filter); }, this);
			vmSignals.pickCountry.add(function (country) {
				this.country = country;
				this.setHash("all-projects");
				window.location.reload();
			}, this);
			vmSignals.goBack.add(function () {
				if (this.vm.canGoBack()) {
					this.vm.history().pop();
					var route = encodeURI(vm.history().pop());
					document.location = document.location.href.substring(0, document.location.href.indexOf("#") + 1) + route;
					crossroads.parse(route);
				}
			}, this);

			var mapSignals = this.mapSignals;
			mapSignals.mapPanStop.add(this.updateCenter, this);
			mapSignals.mapZoomed.add(this.updateZoom, this);
			mapSignals.basemapChanged.add(this.updateBasemap, this);

			hasher.initialized.add(crossroads.parse, crossroads); //parse initial hash
			hasher.changed.add(crossroads.parse, crossroads); //parse hash changes
			hasher.init(); //start listening for history change
		},
		dispose: function () {
			this.crossroads.removeAllRoutes();
			this.crossroads = null;

			this.hasher.stop();
			this.hasher.dispose();
			this.hasher = null;
		},
		navigate: function (hash) {
			var hasher = this.hasher;
			var current = hasher.getHash();
			if (current === hash) {
				return false;
			} else {
				hasher.setHash(hash);
				return true;
			}
		},
		updateCenter: function (point) {
			this.centerLat = point.latitude;
			this.centerLon = point.longitude;
			this.refreshHash();
		},
		updateZoom: function (zoom) {
			this.zoom = zoom;
			this.refreshHash();
		},
		updateBasemap: function (basemap) {
			var map = this.map.getMapByUniqueName(basemap.uniqueName);
			if (map) {
				this.basemap = map.id
			}
			else {
				this.basemap = 414;
			}
			this.refreshHash();
		},
		dispatch: function (language, country, zoom, centerLat, centerLon, basemap, handler, context, parama, paramb) {
			if (this.language != language)
				window.location.reload();
			this.language = language;

			var center = this.map.getCenter();
			if (center.latitude != centerLat || center.longitude != centerLon) {
				this.centerLat = centerLat;
				this.centerLon = centerLon;
				this.map.setCenter({ latitude: parseFloat(centerLat), longitude: parseFloat(centerLon) });
			}

			if (this.map.getZoom() != zoom) {
				this.zoom = zoom;
				this.map.setZoom(zoom);
			}

			if (this.basemap != basemap) {
				this.basemap = basemap;
				this.vm.pickedBasemap(basemap);
			}

			handler.call(context, parama, paramb);
		},
		refreshHash: function () {
			this.setHash(this.hash);
		},
		setHash: function (hash) {
			this.hash = hash;
			var extendedhash = "iadb/" + this.language + "/" + this.country + "/" + this.zoom + "/" + this.centerLat + "/" + this.centerLon + "/" + this.basemap + "/" + hash;
			this.vm.history.push(extendedhash);
			var hasher = this.hasher;
			hasher.changed.active = false;
			hasher.setHash(extendedhash);
			hasher.changed.active = true;
		}
	};

	return iadb;
} (iadb || {}, window));
