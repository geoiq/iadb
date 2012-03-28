var tests = (function (root, map) {

    (root["DataTests"] = function () {
    } .prototype = {
        TestLayersExist: function () {
            if (this.projectLayer == null || this.outputsLayer == null) {
                console.log("-RunLayersExist: FAIL");
                return;
            }
            console.log("+RunLayersExist: PASS");
        },
        TestCategoriesMissingInGlobals: function () {
            var missingResultCategories = Enumerable.From(this.map.getFeatures(this.outputsLayer.guid)).Where(function (x) { return iadb.globals.outputs[x.category] == undefined; }).Distinct("$.category").Select("$.category").ToArray();
            if (missingResultCategories.length > 0) {
                console.log("-TestCategoriesMissingInGlobals: FAIL");
                return;
            }
            console.log("+TestCategoriesMissingInGlobals: PASS");
        },
        TestSectorsMissingInGlobals: function () {
            if (Enumerable.From(this.map.getFeatures(this.projectLayer.guid)).Where(function (x) { return iadb.globals.sectors[x.prosectoren] == undefined; }).Count() > 0) {
                console.log("-TestSectorsMissingInGlobals: FAIL");
            }
            else {
                console.log("+TestSectorsMissingInGlobals: PASS");
            }
        },
        TestProjectsWithNullCoordinates: function () {
            if (Enumerable.From(this.map.getFeatures(this.projectLayer.guid)).Where(function (x) { return !(x.latitude && x.longitude); }).Count() > 0) {
                console.log("-TestProjectsWithNullCoordinates: FAIL");
            }
            else {
                console.log("+TestProjectsWithNullCoordinates: PASS");
            }
        },
        RunDataTests: function (map) {
            this.map = map;
            this.projectLayer = Enumerable.From(map.getLayers()).Where(function (x) { return x.title.toLowerCase() == "projects" }).FirstOrDefault(null);
            this.outputsLayer = Enumerable.From(map.getLayers()).Where(function (x) { return x.title.toLowerCase() == "outputs" }).FirstOrDefault(null);
            tests.DataTests.TestLayersExist();
            tests.DataTests.TestCategoriesMissingInGlobals();
            tests.DataTests.TestSectorsMissingInGlobals();
            tests.DataTests.TestProjectsWithNullCoordinates();
        },
        RunTests: function () {
            tests.DataTests.RunDataTests(this.map);
        }
    });
    return root;
})(tests || {}, map);

