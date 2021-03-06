﻿/// <reference path="iadb.js" />

var iadb = (function (root, ko, global, $) {
	var main = root['Main'] = {};
	main["MapDelay"] = 1000;
	main['Vm'] = function (repo, map, callout, layerCallout, projectPicker, lang) {
		if (!repo) throw 'repo is not provided';
		if (!map) throw 'map is not provided';

		this.lang = lang;
		this.map = map;
		this.repo = repo;

		this.defaultZoom = map.getZoom();
		this.defaultCenter = map.getCenter();
		var mapuniqueName = map.getBasemap().uniqueName || "google_road";
		this.defaultBasemap = map.getMapByUniqueName(mapuniqueName).id;

		var mapSignals = map.mapSignals;
		mapSignals.mapZoomed.add(function () {
			var linesLayer = map.getLinesLayer();
			this.drawLinesLayer();
		}, this);
		mapSignals.featureSelected.add(function (features) {
			features = features.features;
			if (!features || features.length < 1) return;
			var analysis = iadb.analyzeFeatureSet(features);
			if ((features = analysis.results).length > 0) {
				// change map to google satellite, zoom to maximum, center on the result                
				this.map.setCenter({ latitude: features[0].latitude, longitude: features[0].longitude });
				this.map.setZoom(17);
				this.centerMap({ latitude: features[0].latitude, longitude: features[0].longitude });
				this.pickedBasemap(408);
				var items = Enumerable.From(features).Select(function (x) { return new main.ResultVm(new iadb.Repo.Result(x, repo)); }).ToArray();
				this.callout.show(items);
				this.layerCallout.clear();
				this.projectPicker.hide();
			} else if ((features = analysis.projects).length > 1) {
				var selectedProjects = this.repo.getProject(Enumerable.From(features).Select("$.pronumber").ToArray())
				this.projectPicker.items(selectedProjects);
				this.callout.clear();
				this.layerCallout.clear();
			}
			else if (analysis.projects.length > 0) {
				var projectId = analysis.projects[0].pronumber;
				this.pickProject(projectId);
			}
			else if ((features = analysis.layerfeatures).length > 0) {
				this.callout.clear();
				this.projectPicker.hide();
				this.layerCallout.show(features);
			}
		}, this);

		this.mode = ko.observable();
		this.mainSignals = {
			projectPicked: new signals.Signal(),
			projectUnpicked: new signals.Signal(),
			sectorUnpicked: new signals.Signal(),
			outputUnpicked: new signals.Signal(),
			filterResults: new signals.Signal(),
			filterProjects: new signals.Signal(),
			filterSectors: new signals.Signal(),
			resultPicked: new signals.Signal(),
			goBack: new signals.Signal(),
			pickCountry: new signals.Signal()
		};
		this.mainSignals.projectPicked.add(function () { this.mode('projects'); }, this);
		this.mainSignals.projectUnpicked.add(function () { this.mode('projects'); }, this);
		this.mainSignals.sectorUnpicked.add(function () { this.mode('sectors'); }, this);
		this.mainSignals.outputUnpicked.add(function () { this.mode('results'); }, this);
		this.mainSignals.filterResults.add(function () { this.mode('results'); }, this);
		this.mainSignals.filterProjects.add(function () { this.mode('projects'); }, this);
		this.mainSignals.filterSectors.add(function () { this.mode('sectors'); }, this);
		this.mainSignals.resultPicked.add(function () { this.mode('results'); }, this);

		this.areProjectsActive = ko.dependentObservable(function () { return this.mode() == "projects"; }, this);
		this.areSectorsActive = ko.dependentObservable(function () { return this.mode() == "sectors"; }, this);
		this.areResultsActive = ko.dependentObservable(function () { return this.mode() == "results"; }, this);

		this.loading = ko.observable(false);
		this.history = ko.observableArray([]);
		this.canGoBack = ko.dependentObservable(function () {
			return this.history().length > 1;
		}, this);



		this.layerCallout = layerCallout;

		this.callout = callout;
		this.callout.resultPicked.add(function (resultId) {
			this.resetMapToDefaults();
			this.pickResult(resultId);
		}, this);
		this.callout.relatedOutputs.add(function (resultId) {
			var result = this.repo.getResult(resultId);
			this.resetOutput(false);
			this.resetMapToDefaults();
			Enumerable.From(this.outputs()).ForEach(function (x) {
				if (x.id == result.category.id) {
					x.picked(true);
				}
			});
		}, this);
		this.callout.changedSelection.add(function (item) {
			this.centerMap({ latitude: item.latitude, longitude: item.longitude });
		}, this);

		this.projectPicker = projectPicker;
		this.projectPicker.projectPicked.add(function (projectId) {
			this.projectPicker.hide();
			this.pickProject(projectId);
		}, this);


		this.projects = ko.observableArray([]);
		this.hasSomeProjects = ko.dependentObservable(function () {
			var projects = this.projects();
			for (var i = 0; i < projects.length; i++) {
				if (projects[i].visible()) return true;
			}
			return false;
		}, this);
		this.sectors = ko.observableArray([]);
		this.outputs = ko.observableArray([]);
		this.layers = ko.observableArray([]);

		this.basemaps = ko.observableArray([]);
		this.search = ko.observable("").extend({ throttle: 200 });
		this.search.subscribe(this.searchForProjects, this);

		this.pickedProject = ko.observable(null);
		this.pickedProjectDetailsVisible = ko.observable(false);

		this.pickedBasemap = ko.observable(this.defaultBasemap);                // microsoft roads (id == 414) is suppsed to be a default pick
		this.pickedBasemap.subscribe(this.pickBasemap, this);

		this.bottomPanel = new main.BottomPanelVm(this);

		this.legendVisible = ko.observable(false);
		this.popup = new iadb.Popup();

		// trigger whent anything in sector menu is changed
		this.sectorSetChanged = new signals.Signal();
		var sectorSetChangedId = 0;
		this.sectorSetChanged.add(function () {

			if (sectorSetChangedId > 0) {
				window.clearTimeout(sectorSetChangedId);
				sectorSetChangedId = 0;
			}
			// gives user a second since the last change before recalculation starts
			sectorSetChangedId = window.setTimeout(this.filterSectors.bind(this), 100);
		}, this);
		this.allSectors = ko.dependentObservable(iadb.createPickableListAllHandle(this.sectors, this));

		//trigger when anything is changed in result menu
		this.outputSetChanged = new signals.Signal();
		var outputSetChangedId = 0;
		this.outputSetChanged.add(function () {
			if (outputSetChangedId > 0) {
				window.clearTimeout(outputSetChangedId);
				outputSetChangedId = 0;
			}
			outputSetChangedId = window.setTimeout(this.filterOutputs.bind(this), 100);
		}, this);
		this.allOutputs = ko.dependentObservable(iadb.createPickableListAllHandle(this.outputs, this));

		//trigger when changing layer
		this.layerSetChanged = new signals.Signal();
		var layerSetChangedId = 0;
		this.layerSetChanged.add(function (layer) {
			map.setVisibility(layer, layer.picked());
		}, this);

		this.allLayers = ko.dependentObservable(iadb.createPickableListAllHandle(this.layers, this));
		this.visibleLayers = ko.dependentObservable(iadb.createPickedCount(this.layers, this));

		this.projectSetChanged = new signals.Signal();
		var projectSetChangedId = 0;
		this.projectSetChanged.add(function () {
			if (projectSetChangedId > 0) {
				window.clearTimeout(projectSetChangedId);
				projectSetChangedId = 0;
			}
			projectSetChangedId = window.setTimeout(this.filterProjects.bind(this), 100);
		}, this);

		this.countries = ko.observableArray([]);
	}

	main['Vm'].prototype = {
		initialize: function () {
			var $self = this;
			var projects = this.repo.getProjects();

			for (var i = 0; i < projects.length; i++) {
				var project = projects[i];
				project.visible = ko.observable(true);
				project.even = ko.observable(i % 2 == 0);
				this.projects.push(project);
				project.outputs = Enumerable.From(this.repo.results)
                    .Where(function (x) { return x.project == project.id; })
                    .GroupBy(function (x) { return x.category || ''; })
                    .Select(function (x) { return { result: x.Key(), outputs: x.source} })
                    .ToArray();
				project.picked = ko.observable(false);
				project.picked.subscribe(function () {
					this.projectSetChanged.dispatch();
				}, this);
			}

			var sectors = this.repo.getSectors();
			for (var i = 0; i < sectors.length; i++) {
				var vm = new main.SectorVm(sectors[i], this.sectorSetChanged);
				this.sectors.push(vm);
			}

			this.bottomPanel.updateSectors();

			var outputs = this.repo.getOutputs();
			for (var i = 0; i < outputs.length; i++) {
				var vm = new main.OutputVm(outputs[i], this.outputSetChanged);
				this.outputs.push(vm);
			}

			this.bottomPanel.updateOutputs();

			var basemaps = this.repo.getBasemaps();
			for (var i = 0; i < basemaps.length; i++) {
				var basemap = basemaps[i];
				this.basemaps.push(basemap);
			}

			var countries = this.repo.getCountries();
			for (var i = 0; i < countries.length; i++) {
				var country = countries[i];
				country.even = (i % 2 == 0);
				country.pick = function () { $self.mainSignals.pickCountry.dispatch(this.name) };
				this.countries.push(country);
			}


			var layers = this.repo.getLayers();
			for (var i = 0; i < layers.length; i++) {
				this.layers.push(new main.LayerVm(layers[i], this.layerSetChanged));
			}

			// handling escape to close project details
			$(document).keydown((function (e) {
				if (e.which == 27) {
					if (this.popup.visible()) {
						this.popup.close()
					} else if (this.pickedProjectDetailsVisible()) {
						this.pickedProjectDetailsVisible(false);
					} else if (this.callout.visible()) {
						this.callout.clear();
					} else if (this.layerCallout.visible()) {
						this.layerCallout.clear();
					} else if (this.projectPicker.visible()) {
						this.projectPicker.hide();
					} else if (this.legendVisible()) {
						this.legendVisible(false);
					}
				}
			}).bind(this));

			this.loading(false);
		},
		resetZoomToDefaults: function () {
			this.map.setZoom(this.defaultZoom);
		},
		resetMapToDefaults: function () {
			this.resetZoomToDefaults();
			var map = this.map;
			map.setCenter(this.defaultCenter);
			var mapSignals = map.mapSignals;
			mapSignals.mapPanStop.dispatch(this.defaultCenter);
			this.pickedBasemap(this.defaultBasemap);
		},
		centerMap: function (point) {
			var map = this.map;
			var extent = map.getExtent();
			var pixelToLatitude = map.getHeight() / (extent.north - extent.south);
			var sliderHeightInDegrees = 171 / pixelToLatitude;
			var newcenter = { latitude: point.latitude - sliderHeightInDegrees / 2, longitude: point.longitude };
			map.setCenter(newcenter);
			var mapSignals = map.mapSignals;
			mapSignals.mapPanStop.dispatch(newcenter);
		},
		showUrlForCurrentProject: function (type) {
			var projectId = this.pickedProject().id;
			var format = this.projectPopupTypes[type];
			if (format != null) {
				var url = format.url.replace('{projectId}', projectId);
				this.popup.show(url, format.size, format.scrolling);
			}
			return false;
		},
		showUrlForResult: function (type, id) {
			var format = this.resultPopupTypes[type];
			if (format != null) {
				var url = format.url.replace('{id}', id);
				this.popup.show(url, format.size, format.scrolling);
			}
			return false;
		},
		popupWithUrl: function (type) {
			var url = this.projectPopupTypes[type].url;
			return (this.popup.url() || "").startsWith(url.substr(0, url.length / 2));
		},
		readMoreVisible: function () {
			return (this.pickedProject().description || "").length > 0;
		},
		searchForProjects: function (pattern) {
			pattern = (pattern || "").toLowerCase();
			var projects = this.projects();
			var visibleIndex = 0;
			for (var i = 0; i < projects.length; i++) {
				var project = projects[i];
				var visible = (project.name || "").toLowerCase().indexOf(pattern) >= 0 || (project.sector || "").toLowerCase().indexOf(pattern) >= 0 || (project.id || "").toLowerCase().indexOf(pattern) >= 0;
				if (visible) {
					project.even(visibleIndex++ % 2 == 0);
				}
				project.visible(visible);
			}
		},
		filterProjects: function () {
			this.resetZoomToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.setVisibility(linesLayer, false);
			//map.makeSureVisible(projectLayer);
			map.makeSureHidden(resultLayer);
			this.resetOutput(false);
			this.resetSector(true);

			// changing url for result filters           
			this.mainSignals.filterProjects.dispatch(Enumerable.From(this.projects()).Where("$.picked()").Select("$.id").ToArray().join(';'));

			this.pickedProject(null);
			var projects = this.projects();
			var filter = this.buildProjectFilter(projects);
			map.addFilter(projectLayer, filter);

			this.bottomPanel.updateProjects();
			this.bottomPanel.showSectors();
		},
		buildProjectFilter: function (projects) {
			var filter = [];
			for (var i = 0; i < projects.length; i++) {
				var project = projects[i];
				if (!project.picked()) continue;
				filter.push("$[pronumber] == '" + project.id + "'");
			}
			return filter.length > 0 ? (filter.length == project.length ? null : filter.join(" OR ")) : null;
		},
		filterSectors: function () {
			this.resetZoomToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.setVisibility(linesLayer, false);
			//map.makeSureVisible(projectLayer);
			map.makeSureHidden(resultLayer);
			this.resetOutput(false);
			this.resetProject();
			//map.removeFilters(projectLayer);
			this.pickedProject(null);
			var sectors = this.sectors();
			var filter = this.buildSectorFilter(sectors);

			// changing url for sector filters           
			if (this.allSectors()) {
				this.mainSignals.sectorUnpicked.dispatch();
			}
			else {
				this.mainSignals.filterSectors.dispatch(Enumerable.From(sectors).Where("$.picked()").Select("$.id").ToArray().join(';'));
			}
			map.addFilter(projectLayer, filter);

			this.bottomPanel.updateSectors();
			this.bottomPanel.showSectors();
		},
		buildSectorFilter: function (sectors) {
			var filter = [];
			for (var i = 0; i < sectors.length; i++) {
				var sector = sectors[i];
				if (!sector.picked()) continue;
				filter.push("$[prosectoren] == '" + sector.name + "'");
			}
			return filter.length > 0 ? (filter.length == sectors.length ? null : filter.join(' OR ')) : 'false';
		},
		filterOutputs: function () {
			this.resetZoomToDefaults();
			var outputs = this.outputs();
			var filter = this.buildOutputFilter(outputs);
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.setVisibility(linesLayer, false);
			this.pickedProject(null);
			//map.makeSureVisible(resultLayer);
			map.makeSureHidden(projectLayer);
			//map.removeFilters(resultLayer);
			this.resetSector(false);
			this.resetProject();

			// changing url for result filters           
			if (this.allOutputs()) {
				this.mainSignals.outputUnpicked.dispatch();
			}
			else {
				this.mainSignals.filterResults.dispatch(Enumerable.From(this.outputs()).Where("$.picked()").Select("$.id").ToArray().join(';'));
			}


			map.addFilter(resultLayer, filter);

			this.bottomPanel.updateOutputs();
			this.bottomPanel.showOutputs();
		},
		buildOutputFilter: function (outputs) {
			var filter = [];
			for (var i = 0; i < outputs.length; i++) {
				var output = outputs[i];
				if (!output.picked()) continue;
				filter.push("$[category] == " + (output.name == "Other" ? "null" : "'" + output.name + "'"));
			}
			return filter.length > 0 ? (filter.length == outputs.length ? null : filter.join(' OR ')) : 'false';
		},
		tryGoBack: function () {
			this.mainSignals.goBack.dispatch();
		},
		pickBasemap: function (id) {
			var map = this.map;
			map.setBasemap(id);
		},
		pickResult: function (resultId) {
			this.callout.clear();
			this.layerCallout.clear();
			var result = this.repo.getResult(resultId);
			var projectId = result.project;
			this.selectProject(projectId);
			this.mainSignals.resultPicked.dispatch(resultId);
		},
		drawLinesLayer: function () {
			//populating lines layer
			var project = this.pickedProject();
			if (project) {
				var map = this.map;
				console.log("," + new Date().getTime() + ",addFeatures," + map.getLinesLayer().title);
				map.addFeatures(map.getLinesLayer().guid, [], true);

				var results = this.repo.getResults();
				var features = Enumerable
                    .From(this.repo.getResults())
                    .Where(function (x) { return x.project == project.id })
                    .Select(function (x) {
                    	return { "project": project.id,
                    		"geometry": { "type": "LineString", "coordinates": [[x['long'], x.lat], [project['long'], project.lat]] }
                    	}
                    }).ToArray();

				var sector = iadb.globals.sectors[project.sector];
				if (sector == undefined) {
					// could not find a sector setting to other;
					sector = iadb.globals.sectors.Other;
				}

				//console.log("," + new Date().getTime() + ",setLayerStyle," + map.getLinesLayer().title);
				map.setLayerStyle(map.getLinesLayer().guid, { type: "LINE", fill: { lineStyle: "thick", color: 0x0000FF, opacity: 1 }, stroke: { color: sector.color, alpha: 1, weight: 2} });

				console.log("," + new Date().getTime() + ",addFeatures," + map.getLinesLayer().title);
				map.addFeatures(map.getLinesLayer().guid, features, true);
			}
		},
		selectProject: function (projectId) {
			console.log('selectProject:', projectId);
			var project = this.pickedProject();

			var map = this.map;
			if (!project || project.id != projectId) {

				project = this.repo.getProject(projectId);

				this.pickedProject(project);

				this.bottomPanel.setProject(this.pickedProject());

				this.drawLinesLayer();

				this.centerMap({ latitude: project.lat, longitude: project['long'] });

				var projectLayer = map.getProjectLayer();
				var resultLayer = map.getResultLayer();
				var linesLayer = map.getLinesLayer();

				$.when(map.addFilter(projectLayer, "$[pronumber] == '" + projectId + "'"))
                    .then(function () {
                    	map.addFilter(resultLayer, "$[project number] == '" + projectId + "'")
                    } .bind(this));
				map.setVisibility(linesLayer, true);
			}
			this.resetSector(false);
			this.legendVisible(false);
			this.callout.clear();
			this.layerCallout.clear();
			this.pickedProjectDetailsVisible(true);
			this.bottomPanel.showProject();
		},
		pickProject: function (projectId) {
			console.log('pickProject:', projectId);
			this.selectProject(projectId);
			this.mainSignals.projectPicked.dispatch(projectId);
		},
		unpickProject: function () {
			console.log('unpickProject');
			this.resetMapToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			this.search("");
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.removeFilters(projectLayer);

			map.setVisibility(linesLayer, false);
			map.setVisibility(projectLayer, true);
			map.setVisibility(resultLayer, false);
			this.pickedProjectDetailsVisible(false);
			this.resetProject();
			this.resetSector(true);
			this.resetOutput(false);
			this.pickedProject(null);
			this.bottomPanel.updateProjects();
			this.bottomPanel.showSectors();
			this.mainSignals.projectUnpicked.dispatch();
		},
		resetProject: function () {
			console.log('resetProject');
			this.projectPicker.hide();
			// restoring the menu
			this.projectSetChanged.active = false;
			var projects = this.projects();
			for (var i = 0; i < projects.length; i++) {
				projects[i].picked(false);
			}
			this.projectSetChanged.active = true;
		},
		unpickSector: function () {
			console.log('unpickSector');
			this.resetMapToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer()
			map.setVisibility(projectLayer, true);
			map.setVisibility(linesLayer, false);
			map.setVisibility(resultLayer, false);
			this.pickedProjectDetailsVisible(false);
			this.pickedProject(null);
			this.resetSector(true);
			this.resetOutput(false);
			map.removeFilters(projectLayer);
			this.bottomPanel.updateSectors();
			this.bottomPanel.showSectors();
			this.mainSignals.sectorUnpicked.dispatch();
		},
		resetSector: function (state) {
			console.log('start resetSector');
			this.projectPicker.hide();
			// restoring the menu
			this.sectorSetChanged.active = false;
			var sectors = this.sectors();
			for (var i = 0; i < sectors.length; i++) {
				sectors[i].picked(state);
			}
			this.sectorSetChanged.active = true;
			console.log('end resetSector');
		},
		unpickOutput: function () {
			console.log('unpickOutput');
			this.resetMapToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer()
			map.makeSureHidden(projectLayer);
			map.setVisibility(linesLayer, false);
			map.makeSureVisible(resultLayer);
			this.pickedProjectDetailsVisible(false);
			this.pickedProject(null);
			map.removeFilters(resultLayer);
			this.resetOutput(true);
			this.resetSector(false);
			this.bottomPanel.updateOutputs();
			this.bottomPanel.showOutputs();
			this.mainSignals.outputUnpicked.dispatch();
		},
		resetOutput: function (state) {
			console.log('resetOutput');
			this.projectPicker.hide();
			var map = this.map;
			var resultLayer = map.getResultLayer();
			//map.removeFilters(resultLayer);

			// restoring the menu
			this.outputSetChanged.active = false;
			var outputs = this.outputs();
			for (var i = 0; i < outputs.length; i++) {
				outputs[i].picked(state);
			}
			this.outputSetChanged.active = true;
		},
		resultPopupTypes: {
			photos: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "no", size: { width: 742, height: 575} },
			news: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "auto" },
			videos: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "no", size: { width: 896, height: 555} },
			documents: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "auto" },
			info: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "auto" }

		},
		projectPopupTypes: {
			news: { url: 'http://www.iadb.org/en/eye-on-development/haiti/project-news-list,3981.html?projectID={projectId}', scrolling: "auto" },
			videos: { url: 'http://www.iadb.org/en/eye-on-development/haiti/project-videos,3978.html?projectid={projectId}', scrolling: "no", size: { width: 896, height: 555} },
			documents: { url: 'http://www.iadb.org/en/eye-on-development/haiti/document-list,3976.html?projectID={projectId}', scrolling: "auto" },
			photos: { url: 'http://www.iadb.org/en/eye-on-development/haiti/project-photo-gallery,4080.html?projectID={projectId}', scrolling: "no", size: { width: 742, height: 575} },
			info: { url: 'http://www.iadb.org/en/eye-on-development/haiti/project-description,4039.html?projectID={projectId}', scrolling: "auto" }
		},
		applyFilters: function (mode, filter) {
			switch (mode) {
				case "sectors":
					var enumArray = Enumerable.From(filter.split(';'));
					Enumerable.From(this.sectors()).ForEach(function (x) { x.picked(enumArray.Contains(x.id.toString())); });
					break;
				case "results":
					var enumArray = Enumerable.From(filter.split(';'));
					Enumerable.From(this.outputs()).ForEach(function (x) { x.picked(enumArray.Contains(x.id.toString())); });
					break;
				case "projects":
					var enumArray = Enumerable.From(filter.split(';'));
					Enumerable.From(this.projects()).ForEach(function (x) { x.picked(enumArray.Contains(x.id.toString())); });
					break;
			}
		},
		hideLegend: function () {
			this.legendVisible(false);
		}
	};



	(main.LayerVm = function (data, layerSetChanged) {
		this.id = root.nextId();
		this.guid = data.guid;
		this.order = data.order;
		this.name = data.title;
		this.source = data.subtitle;
		this.imageurl = encodeURI("/images/legend/" + this.name + ".png");
		this.picked = ko.observable(data.visible);
		this.picked.subscribe(function (value) {
			layerSetChanged.dispatch(this);
		}, this);
	}).prototype = {
	};

	(main.SectorVm = function (data, sectorSetChanged) {
		this.id = data.id;
		this.name = data.name;
		this.imageurl = data.imageurl;
		this.count = data.count;
		this.picked = ko.observable(true);
		this.picked.subscribe(function (value) {
			sectorSetChanged.dispatch();
		}, this);
	}).prototype = {
	};

	(main.ResultVm = function (data) {
		this.title = data.title;
		this.description = data.description;
		this.imageUrl = data.imageUrl;
		this.outputid = data.outputid;
		this.hasdocuments = data.hasdocuments;
		this.hasnews = data.hasnews;
		this.hasphotos = data.hasphotos;
		this.hasvideos = data.hasvideos;
		this.hasmedia = this.hasphotos || this.hasdocuments || this.hasnews || this.hasvideos;
		this.latitude = data.lat;
		this.longitude = data['long'];
	}).prototype = {
	};

	(main.OutputVm = function (data, outputSetChanged) {
		this.id = data.id;
		this.name = data.name;
		this.imageurl = data.imageurl;
		this.count = data.count;
		this.description = data.description;
		this.picked = ko.observable(false);
		this.picked.subscribe(function (value) {
			outputSetChanged.dispatch();
		}, this);
	}).prototype = {
	};


	(main.BottomPanelResultVm = function (data) {
		this.id = data.id;
		this.name = data.name;
		this.count = data.count;
		this.imageurl = data.imageurl;
	}).prototype = {
	};


	(main.BottomPanelSectorVm = function (data, count) {
		this.id = data.id;
		this.name = data.name;
		this.count = count;
		this.imageurl = data.imageurl;
	}).prototype = {
	};

	(main.BottomPanelVm = function (parent) {
		this.parent = parent;
		this.repo = parent.repo;
		this.mode = ko.observable("sectors");
		this.project = ko.observable(null);
		this.outputs = ko.observable([]);
		this.sectors = ko.observable([]);
	}).prototype = {
		showSectors: function () { this.mode("sectors"); },
		showProject: function () {
			this.mode("projects");
		},
		showOutputs: function () { this.mode("results"); },
		setProject: function (project) {
			this.project(project);
		},
		updateOutputs: function () {
			this.outputs(Enumerable.From(this.parent.outputs()).Where("$.picked()").Select(function (x) { return new main.BottomPanelResultVm(x); }).ToArray());
		},
		updateSectors: function () {
			this.sectors(Enumerable.From(this.parent.sectors()).Where("$.picked()&&$.count>0").Select(function (x) {
				return new main.BottomPanelSectorVm(x, x.count);
			}).Where("$").ToArray());
		},
		updateProjects: function () {
			// update bottom panel sectors
			var filteredProjects = Enumerable.From(this.parent.projects()).Where("$.picked()").GroupBy("$.sector").ToArray();
			if (filteredProjects.length == 0) {
				this.sectors(Enumerable.From(this.parent.sectors()).Where("$.count>0").Select(function (x) {
					return new main.BottomPanelSectorVm(x, x.count);
				}).ToArray());
			}
			else {
				this.sectors(Enumerable.From(this.parent.sectors()).Join(filteredProjects, "$.name", "$.Key()", function (inner, outer) {
					return new main.BottomPanelSectorVm(inner, outer.source.length);
				}).Where("$").ToArray());
			}
		},
		getMode: function () { return this.mode(); }
	};
	return root;

})(iadb || {}, ko, window, jQuery);
