(function (iadb) {
	// sector constructor
	function sector(filename, color, id) {
		return { color: color, filename: filename, id: id };
	};
	function priority(filename, color, id) {
		return { color: color, filename: filename, id: id };
	};
	function projectType(filename, color, id) {
		return { color: color, filename: filename, id: id };
	};
	iadb.globals = {
		url: "http://staging.iadb.geoiq.com",
		imageurl: "http://staging.portal.iadb.geoiq.com",
		sectors: {
			"AG": new sector("AG", 0x296e28, 1),
			"AS": new sector("AS", 0x8cf4c5, 2),
			"DU": new sector("DU", 0xcd7333, 3),
			"ED": new sector("ED", 0xa11016, 4),
			"EN": new sector("EN", 0xffab00, 5),
			"FM": new sector("FM", 0x002c8b, 6),
			"IN": new sector("IN", 0x778762, 7),
			"IS": new sector("IS", 0xff862a, 8),
			"OT": new sector("OT", 0xffc251, 9),
			"PA": new sector("PA", 0xc22900, 10),
			"PS": new sector("PS", 0xcecece, 11),
			"RI": new sector("RI", 0x4c9c39, 12),
			"RM": new sector("RM", 0x6fadca, 13),
			"SA": new sector("SA", 0x60003f, 14),
			"ST": new sector("ST", 0x008484, 15),
			"TD": new sector("TD", 0x2d1a33, 16),
			"TR": new sector("TR", 0x6e5eb7, 17),
			"TU": new sector("TU", 0xcdcd33, 18)
		},
		priorities: {
			"CC": new priority("CC", 0x89be89 , 1)
		},
		projectTypes: {
			"PUBLIC": new projectType("PUBLIC", 0xffffff , 1),
			"PRIVATE": new projectType("PRIVATE", 0xffffcf , 2),
			"MIF": new projectType("MIF", 0xfffcff , 3)
		},
		outputs: {
			"Other": "1",
			"Energy generation": "1",
			"Energy distribution": "2",
			"Energy transmission": "3",
			"Roads and highways": "5",
			"Urban transport": "6",
			"Rural roads": "7",
			"Bridges": "8",
			"Airports and ports": "9",
			"Drinking water production and storage": "10",
			"Drinking water systems": "12",
			"Water resource management": "13",
			"Wastewater system": "14",
			"Wastewater treatment": "15",
			"Pluvial drainage": "16",
			"Solid waste management": "17",
			"Housing and shelters": "18",
			"Neighborhood improvement": "19",
			"Historical, Cultural & Natural Heritage": "20",
			"Trade Facilitation": "21",
			"Credit financing": "22",
			"Direct support to MSME": "23",
			"Agricultural support": "24",
			"Food safety, animal and plant health": "25",
			"Sustainable tourism": "26",
			"Environmental management": "27",
			"Health facilities and equipment": "28",
			"Educational facilities and equipment": "29",
			"Training to direct beneficiaries": "30",
			"Vulnerable people support": "31",
			"Land demarcation and titling": "32",
			"Citizen security": "33",
			"Institutional support": "35",
			"NO VISUALIZABLE": "1",
			"Alternative renewable energy": "4",
			"Civil, birth registry & identification": "34",
			"Drinking water distribution": "11"

			//			"Other": "42",
			//			"Airports and port rehabilitated": "9",//
			//			"Animals vaccinated": "45",
			//			"Bridges built or mantained": "8",//
			//			"Farmers supported": "31",//
			//			"Natural disaster prevention systems": "31",//
			//			"Households with new or upgraded dwellings": "18",//
			//			"Households with new or upgraded water supply": "13",//
			//			"Water infrastructure": "13",//
			//			"Irrigation and draining canals": "13",//
			//			"Strategies, studies, and regulations": "9",
			//			"Individuals benefited from programs to promote higher labor market productivity": "31",//
			//			"Power generation, transmission, and distribution infrastructure rehabilitated": "1",//
			//			"Preventive health campaigns": "8",
			//			"Public institutions supported": "12",
			//			"Public officials trained": "31",//
			//			"Roads built or maintained": "5",//
			//			"Sanitary solutions/facilities installed": "12",//
			//			"Sanitation infrastructure": "12",//
			//			"Schools built or reformed": "29",//
			//			"Schools equipped with furniture and school materials": "44",
			//			"Students benefited from education projects": "31",//
			//			"Teachers trained": "30"//
		},
		getOutputBySectorIcons: function () {
			var returnObject = {};
			var outputs = Enumerable.From(this.outputs).Join(this.sectors, "x=>true", "x=>true", function (outer, inner) {
				var filename = iadb.globals.sectors[inner.Key].filename;
				returnObject[inner.Key + "-" + outer.Key] = encodeURI(iadb.globals.imageurl + "/images/icons/sectors/" + filename + "_" + outer.Value + ".png");
				return null;
			}).ToArray();
			return returnObject;
		},
		getOutputByPrioritiesIcons: function () {
			var returnObject = {};
			var outputs = Enumerable.From(this.outputs).Join(this.priorities, "x=>true", "x=>true", function (outer, inner) {
				var filename = iadb.globals.priorities[inner.Key].filename;
				returnObject[inner.Key + "-" + outer.Key] = encodeURI(iadb.globals.imageurl + "/images/icons/priorities/" + filename + "_" + outer.Value + ".png");
				return null;
			}).ToArray();
			return returnObject;
		},
		getOutputByProjectTypesIcons: function () {
			var returnObject = {};
			var outputs = Enumerable.From(this.outputs).Join(this.projectTypes, "x=>true", "x=>true", function (outer, inner) {
				var filename = iadb.globals.projectTypes[inner.Key].filename;
				returnObject[inner.Key + "-" + outer.Key] = encodeURI(iadb.globals.imageurl + "/images/icons/projectTypes/" + filename + "_" + outer.Value + ".png");
				return null;
			}).ToArray();
			return returnObject;
		},
		getOutputIcons: function () {
			var returnObject = {};
			// Using transportation for generic images
			var outputs = Enumerable.From(this.outputs).Select(function (x) {
				returnObject[x.Key == "Other" ? null : x.Key] = encodeURI("/images/icons/sectors/PS_" + x.Value + ".png");
				return null;
			}).ToArray();
			return returnObject;
		}
	};

	iadb.globals.prototype = {
		getSectorIcon: function (sector) {
			return "";
		},
		getPriorityIcon: function (priority) {
			return "";
		},
		getProjectTypeIcon: function (projectType) {
			return "";
		},
		getResultIcon: function (sector, result) {
			return "";
		}
	}
})(iadb || {});
