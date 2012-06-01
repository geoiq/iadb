var iadb = (function (iadb) {

	iadb['Repo'] = function () {
		this.excludedLayers = "outputs lines projects";
	};

	iadb['Repo'].prototype = {
		initialize: function (map, basemaps, countries) {
			if (!map) throw 'map is not provided';
			var projectFeatures = map.getProjects();
			var outputFeatures = map.getResults();

			// create project array
			var projects = this.projects = Enumerable.From(projectFeatures).OrderBy("$.pronumber").Select(function (x) {
				return {
					hasDocuments: x.hasdocuments == "1",
					hasNews: x.hasnews == "1",
					hasPhotos: x.hasphotos == "1",
					hasVideos: x.hasvideos == "1",
					pid: iadb.nextId(),
					id: x.pronumber,
					name: x.proname,
					sector: x.prosectoren,
					priority: x.priority,
					description: x.prodescription,
					lat: x.latitude,
					"long": x.longitude,
					outputcount: Enumerable.From(outputFeatures).Where(function (y) { return y['project number'] == x.pronumber }).Count()
				}
			}).ToArray();
			// create sectors array
			var sectorIndex = 0;
			var sectors = this.sectors = Enumerable.From(iadb.globals.sectors).OrderBy(function (x) {
				return x.Key == "Other" ? "zzz" : x.Key
			}).Select(function (x) {
				var count = Enumerable.From(projects).Where(function (y) { return y.sector == x.Key }).Count();
				return { name: x.Key, id: x.Value.id, count: count, imageurl: encodeURI(iadb.globals.imageurl + "/images/icons/sectors/" + x.Value.filename + ".png") };
			}).Where("$.count>0").ToArray();
			
			// create priorities array
			var priorityIndex = 0;
			var priorities = this.priorities = Enumerable.From(iadb.globals.priorities).OrderBy(function (x) {
				return x.Key == "" ? "zzz" : x.Key
			}).Select(function (x) {
				var count = Enumerable.From(projects).Where(function (y) { return y.priority == x.Key }).Count();
				return { name: x.Key, id: x.Value.id, count: count, imageurl: encodeURI(iadb.globals.imageurl + "/images/icons/priorities/" + x.Value.filename + ".png") };
			}).Where("$.count>0").ToArray();


			// create output category array
			var outputIndex = 0;
			var outputs = this.outputs = Enumerable.From(outputFeatures).GroupBy("$['category']")
            .OrderBy(function (x) {
            	return x.Key() == null ? "zzz" : x.Key();
            })
            .Select(function (x) {
            	return {
            		id: (outputIndex++).toString(),
            		name: x.Key() == null ? "Other" : x.Key(),
            		imageurl: iadb.globals.getOutputIcons()[x.Key()],
            		count: x.source.length
            	}
            }).ToArray();

			// create results array
			var results = this.results = Enumerable.From(outputFeatures).Select(function (x) { return new iadb.Repo.Result(x, this); } .bind(this)).ToArray();

			this.basemaps = basemaps;
			this.countries = countries;
		},

		dispose: function () {
			this.projects = null;
			this.sectors = null;
			this.priorities = null;
			this.outputs = null;
			this.results = null;
			this.basemaps = null;
			this.countries = null;
		},

		getProject: function (project) {
			if (typeof (project) == "string") {
				return Enumerable.From(this.getProjects()).Where(function (x) { return x.id == project }).FirstOrDefault(null);
			}
			else {
				return Enumerable.From(this.getProjects()).Join(Enumerable.From(project), "$.id", "$", function (inner, outer) { return inner; }).ToArray();
			}
		},
		getProjects: function (ids) {
			return this.projects || [];
		},
		getSector: function (sector) {
			return Enumerable.From(this.getSectors()).Where(function (x) { return x.name == sector }).FirstOrDefault(null);
		},
		getPriority: function (priority) {
			return Enumerable.From(this.getPriorities()).Where(function (x) { return x.name == priority }).FirstOrDefault(null);
		},
		getSectors: function () {
			return this.sectors || [];
		},
		getPriorities: function () {
			return this.priorities || [];
		},
		getOutput: function (sector) {
			return Enumerable.From(this.getOutputs()).Where(function (x) { return x.name == sector }).FirstOrDefault(null);
		},
		getOutputs: function () {
			return this.outputs || [];
		},
		getResult: function (id) {
			return Enumerable.From(this.getResults()).Where(function (x) { return x.outputid.toString() == id.toString() }).FirstOrDefault(null);
		},
		getResults: function () {
			return this.results || [];
		},
		getBasemaps: function () {
			return this.basemaps || [];
		},
		getCountries: function () {
			return this.countries || [];
		},
		getLayers: function () {
			var layers = map.getLayers();
			var result = Enumerable.From(layers);
			result = result.OrderBy("$.title");
			result = result.Where((function (x) { return this.excludedLayers.indexOf(x.title.toLowerCase()) < 0; }).bind(this));
			return result.ToArray();
		}
	};
	(iadb.Repo.Result = function (data, repo) {
		// per their request everything except hasphotos should be false;
		this.hasdocuments = false; // data.hasdocuments==1;
		this.hasnews = false; // data.hasnews==1;
		this.hasphotos = data.hasphotos == 1;
		this.hasvideos = false; //data.hasvideos==1;
		this.outputid = data.outputid;
		this.project = data['project number'];
		this.title = data.title;
		this.description = data.body;
		this.lat = data.latitude;
		this['long'] = data.longitude;
		// TODO: Get category
		this.category = repo.getOutput(data['category'] || "Other");
		this.imageUrl = data['photo filename'] == null ? null : encodeURI('http://services.iadb.org/wmsfiles/images/datavis/thumbs/' + data['photo filename']);
	}).prototype = {
	};
	return iadb;

} (iadb || {}));
