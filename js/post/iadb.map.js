var iadb = (function (idab, $) {

    (iadb['Map'] = function (f1, options, signals) {
        if (!f1) throw 'f1 is not provided';
        if (!options) throw 'options are not provided';
        if (!signals) throw 'signals are not provided';
        this.f1 = f1;
        this.mapOptions = options;
        this.mapSignals = signals;
    }).prototype = {
        getCenter: function () {
            var center = this.f1.getCenter();
            return { latitude: center.lat, longitude: center.lon };
        },
        getBasemap: function () {
        	return this.f1.getBasemap();
        },
        getLayers: function () {
        	return this.f1.getLayers();
        },
        findLayer: function (predicate) {
            var layers = this.getLayers();
            for (var i = 0; i < layers.length; i++) {
                var layer = layers[i];
                if (predicate(layer)) return layer;
            }
            return null;
        },
        getHeight: function () {
            return $("#" + this.f1.options.dom_id).height();
        },
        getExtent: function () {
            return this.f1.getExtent();
        },
        setZoom: function (zoom) {
            return this.f1.setZoom(zoom);
        },
        getZoom: function () {
            return this.f1.getZoom();
        },
        getLayer: function (predicate) {
            var found = this.findLayer(predicate);
            if (!found) throw 'unable to find a layer using predicate: ' + predicate.toString();
            return found;
        },
        getProjects: function () {
            return this.f1.getFeatures(this.getProjectLayer().guid);
        },
        getProjectLayer: function () {
        	return this.getLayer(this.mapOptions.isProjectLayer);
        },
        getResults: function () {
            return this.f1.getFeatures(this.getResultLayer().guid);
        },
        getResultLayer: function () {
        	return this.getLayer(this.mapOptions.isResultLayer);
        },
        getLinesLayer: function () {
        	return this.getLayer(this.mapOptions.isLinesLayer);
        },
        highlightResult: function (id) {
            var f1 = this.f1;
            var resultLayer = this.findLayer(this.mapOptions.isResultLayer);
            //setTimeout(function () { f1.addHighlight(resultLayer.guid, "$[rf]==" + id.toString()); }, 5000);
            setTimeout(function () { f1.addHighlight(resultLayer.guid, "$[category] == 'Households with new or upgraded water supply'") }, 5000);
        },
        setup: function (sectors) {
            if (!sectors) throw 'sectors are not provided';
            var f1 = this.f1;

            // create categories for projects
            var sectorIndex = 0;
            var sectorIcons = {};
            Enumerable.From(sectors).ForEach(function (x) {
                sectorIcons[x.name] = x.imageurl;
            });

               var projectLayer = this.findLayer(this.mapOptions.isProjectLayer);
               var resultLayer = this.findLayer(this.mapOptions.isResultLayer);

            // display ouputs with category icons
            console.log("," + new Date().getTime() + ",addLayerCategoryFilter," + resultLayer.title);
            f1.addLayerCategoryFilter(resultLayer.guid, { attribute: "custom category", categories: iadb.globals.getOutputBySectorIcons() });

            var slsOptions = { icon: { symbol: iadb.globals.imageurl + "/images/icons/output-other.png"} };
            this.setLayerStyle(resultLayer.guid, slsOptions);

            console.log("," + new Date().getTime() + ",addLayerCategoryFilter," + projectLayer.title);
            f1.addLayerCategoryFilter(projectLayer.guid, { attribute: "prosector", categories: sectorIcons });

        },

        setLayerStyle: function (layer, options) {
            console.log("," + new Date().getTime() + ",setLayerStyle," + layer.title);
            console.log(options);
            this.f1.setLayerStyle(layer, options);
        },
        replaceFeatures: function () {
            var f1 = this.f1;
            var projectLayer = this.findLayer(this.mapOptions.isProjectLayer);
            var resultLayer = this.findLayer(this.mapOptions.isResultLayer);

            // replace output layers
            // repopulate outputs
            var projectFeatures = Enumerable.From(f1.getFeatures(projectLayer.guid));
            var outputfeatures = f1.getFeatures(resultLayer.guid);

            var id = 0;
            outputfeatures = Enumerable.From(outputfeatures).Join(projectFeatures, "x=>x['project number']", "y=>y.pronumber", function (inner, outer) {
                var sectorName = outer.prosector;
                var priorityName = outer.priority;
                var projectTypeName = outer.projecttype;
                var category = inner['category'] || "Other";
                inner["custom category"] = sectorName + "-" + category;
                //inner.rf = id++;
                return inner;
            }).ToArray();

            console.log("," + new Date().getTime() + ",addFeatures," + resultLayer.title);
            console.log("outputfeatures:" + (outputfeatures ? "defined" : "null or undefined"));
            this.addFeatures(resultLayer.guid, outputfeatures, true);

        },
        addFeatures: function (guid, features) {
            console.log({ features: features });
            var f1 = this.f1;
            f1.addFeatures(guid, features, true);
        },
        addFilter: function (layer, expression) {
            var dfr = new $.Deferred();
            this.removeFilters(layer).pipe(function () {
                if (expression != null) {
                    if (expression.indexOf('"') >= 0) throw 'expression contains a quote sign: ' + expression;
                    console.log("," + new Date().getTime() + ",addFilter," + layer.title);
                    this.f1.addFilter(layer.guid, { expression: expression });
                }
                this.makeSureVisible(layer);
                console.log('layer ' + layer.guid + ' got filter: ' + expression);
                setTimeout(function () {
                    dfr.resolve();
                }, iadb.Main.MapDelay / 2);
            } .bind(this));
            return dfr.promise();
        },
        removeFilter: function (layer, expression) {
            var dfr = new $.Deferred();
            setTimeout(function () { dfr.resolve() }, iadb.Main.MapDelay / 2);
            console.log("," + new Date().getTime() + ",removeFilter," + layer.title);
            this.f1.removeFilter(layer.guid, { expression: expression });
            return dfr.promise();
        },
        removeFilters: function (layer) {
            var dfr = new $.Deferred();
            setTimeout(function () { dfr.resolve() }, iadb.Main.MapDelay / 2);
            console.log("," + new Date().getTime() + ",removeFilters," + layer.title);
            this.f1.clearFilters(layer.guid);
            return dfr.promise();
        },
        setVisibility: function (layer, visible) {
            console.log("," + new Date().getTime() + ",setVisibility," + layer.title + ',' + visible);
            this.f1.showLayer(layer.guid, visible);
        },
        makeSureVisible: function (layer) {
            if (layer.visible) return;
            this.setVisibility(layer, true);
        },
        makeSureHidden: function (layer) {
            if (!layer.visible) return;
            this.setVisibility(layer, false);
        },
        setCenter: function (point) {
            console.log("," + new Date().getTime() + ",setCenter,");
            this.f1.setCenter(point.latitude, point.longitude);
        },
        setBasemap: function (id) {
            console.log("," + new Date().getTime() + ",setBasemap," + id);
            this.f1.setBasemap(id);
        },
        getMapByUniqueName: function (uname) {
            for (var i = 0; i < iadb.Map.basemaps.length; i++) {
                if (iadb.Map.basemaps[i].uniqueName == uname)
                    return iadb.Map.basemaps[i]
            }
            return null;
        }
    };

    iadb['Map'].basemaps = [
        { id: 410, name: 'Acetate', uniqueName: 'acetate' }, { id: 421, name: 'Acetate Terrain', uniqueName: "acetate_terrain" }, { id: 408, name: 'Google Aerial', uniqueName: "google_aerial" },
        { id: 419, name: 'Google Hybrid', uniqueName: "google_hybrid" }, { id: 412, name: 'Google Road', uniqueName: "google_road" }, { id: 422, name: 'Google Terrain', uniqueName: "google_terrain" },
        { id: 415, name: 'MapQuest', uniqueName: "mapquest" }, { id: 407, name: 'Microsoft Aerial', uniqueName: "maerial" }, { id: 418, name: 'Microsoft Hybrid', uniqueName: "mhybrid" },
        { id: 414, name: 'Microsoft Road', uniqueName: "microsoft_road" }, { id: 406, name: 'NASA Blue Marble', uniqueName: "nasa_blue_marble" }, { id: 411, name: 'OpenStreetMap Road', uniqueName: "openstreetmap_road" },
        { id: 416, name: 'OpenSteetMap GeoCache', uniqueName: "osm_geocache" }
    //        , { id: 409, name: 'Yahoo Aerial', uniqueName: "yaerial" },
    //        { id: 420, name: 'Yahoo Hybrid', uniqueName: "yhybrid" }, { id: 413, name: 'Yahoo Roads', uniqueName: "yroad" }
    ];
    return iadb;

} (iadb || {}, jQuery));
