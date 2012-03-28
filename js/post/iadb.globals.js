(function (iadb) {
	// sector constructor
	function sector(filename, color, id) {
		return { color: color, filename: filename, id: id };
	};
	iadb.globals = {
		url: "http://iadb.geoiq.com",
		imageurl: "http://iadb.demo.eastbanctech.com",
		sectors: {
			"Agriculture and Rural Development": new sector("AG", 0x296e28, 1),
			"Capital Markets": new sector("CM", 0x002882, 2),
			"Education": new sector("ED", 0xa11016, 3),
			"Energy": new sector("EN", 0xffab00, 4),
			"Environment and Natural Disasters": new sector("PA", 0xc22900, 5),
			"Fishery": new sector("PE", 0x3d57ff, 6),
			"Forestry": new sector("FO", 0x878600, 7),
			"Health": new sector("SA", 0x60003f, 8),
			"Industry": new sector("IN", 0x778762, 9),
			"Information Technology and Telecomm": new sector("CO", 0x1a5555, 10),
			"Microenterprise": new sector("ME", 0x6969ff, 11),
			"Mining": new sector("MI", 0x3b2700, 12),
			"Multisector Credit & Preinvestment": new sector("CR", 0x499936, 13),
			"Other": new sector("OT", 0xffc251, 14),
			"Preinvestment": new sector("PR", 0xbb006b, 23),
			"Private Sector Development": new sector("PS", 0xcecece, 24),
			"Reform / Modernization of the State": new sector("RM", 0x6fadca, 15),
			"Sanitation": new sector("OS", 0x81f3c0, 16),
			"Science and Technology": new sector("CT", 0x008484, 17),
			"Social Investment": new sector("IS", 0xff862a, 18),
			"Tourism": new sector("TU", 0xcdcd33, 19),
			"Trade": new sector("CE", 0x2d1a33, 20),
			"Transportation": new sector("TR", 0x6e5eb7, 21),
			"Urban Development and Housing": new sector("DU", 0xcd7333, 22)
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
			"NO VISUALIZABLE": "1"

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
		getResultIcon: function (sector, result) {
			return "";
		}
	}
})(iadb || {});
