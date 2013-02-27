var iadb = (function (iadb, window) {

    var id = 0;

    iadb.nextId = function () {
        return ++id;
    }

    iadb.lastId = function () {
        return id;
    }

    iadb.type = function (something) {
        if (something == null) {
            return String(something);
        } else {
            var type = Object.prototype.toString.call(something);
            return type.substring(8, type.length - 1).toLowerCase();
        }
    };

    iadb.createPickedCount = function (observableArray, context) {
        return {
            read: function () {
                var array = observableArray();
                try {
                    return Enumerable.From(array).Where("$.picked()").Count();
                }
                catch (ex) {
                    return 0;
                }
            },
            write: function (value) { },
            owner: context
        };
    };

    iadb.createPickableListAllHandle = function (observableArray, context) {
        return { read: function () {
            var array = observableArray();
            for (var i = 0; i < array.length; i++) {
                if (!array[i].picked()) return false;
            }
            return true;
        }, write: function (value) {
            window.setTimeout(function () {
                var array = observableArray();
                for (var i = 0; i < array.length; i++) {
                    array[i].picked(value);
                }
            }, 0);
        }, owner: context
        };
    };

    iadb.contentFitsContainer = function (id) {
        var element = document.getElementById(id);
        console.log(['clientHeight', element.clientHeight, 'offsetHeight', element.scrollHeight]);
        return element.clientHeight >= element.scrollHeight;
    };


    iadb.analyzeFeatureSet = function (features) {
        var projects = [];
        var results = [];
        var layerfeatures = [];
        var iics = [];
        var tffps = [];
        if (iadb.type(features) === 'array') {
            for (var i = 0; i < features.length; i++) {
                var feature = features[i];
                if (iadb.isProjectFeature(feature)) {
                    projects.push(feature);
                } else if (iadb.isResultFeature(feature)) {
                    results.push(feature);
                }else if(iadb.isIicFeature(feature)){
                	iics.push(feature);
                }else if(iadb.isTffpFeature(feature)){
                	tffps.push(feature);
                }
                else layerfeatures.push(feature);
            }
            return { results: results, projects: projects, layerfeatures:layerfeatures, iics: iics, tffps: tffps };
        } else {
            return { results: [], projects: [], layerfeatures:[] , iics:[], tffps:[]};
        }
    }

    iadb.isProjectFeature = function (feature) {
        if (!feature) return false;
        return !!feature.pronumber;
    };

    iadb.isIicFeature = function (feature) {
        if (!feature) return false;
        return !!feature.iicnumber;
    };

    iadb.isTffpFeature = function (feature) {
        if (!feature) return false;
        return !!feature.tffpphoto;
    };

    iadb.isResultFeature = function (feature) {
        if (!feature) return false;
        return !!feature.outputid;
    }


    return iadb;

} (iadb || {}, window));
