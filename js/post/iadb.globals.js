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
		url: "http://iadb.geoiq.com",
		imageurl: "http://portal2.iadb.geoiq.com",
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
			"MIF": new projectType("MIF", 0xfffcff , 3),
			"IIC": new projectType("IIC", 0xffcfff , 4)
		},
		outputs: {
		/*	"Other": "1",
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
			"Drinking water distribution": "11",
			"Other infrastructure": "41",
			"Rural Potable water": "49",
			"Urban Sanitation": "52",
			"Urban Potable water": "12",
			"Disaster prevention": "38",
			"Irrigation": "40",
			"Rural Sanitation": "14",*/

		    //english
		    "Other": "1",
		    "NO VISUALIZABLE": "1",
		    "Agricultural support": "24",
		    "Airports and ports": "9",
		    "Bridges": "8",
		    "Citizen security": "33",
		    "Civil, birth registry & identification": "34",
		    "Credit financing": "22",
		    "Direct support to MSME": "23",
		    "Disaster prevention": "38",
		    "Educational facilities and equipment": "29",
		    "Energy distribution": "2",
		    "Energy generation": "1",
		    "Energy transmission": "3",
		    "Environmental management": "27",
		    "Food safety, animal and plant health": "25",
		    "Health facilities and equipment": "28",
		    "Historical, Cultural & Natural Heritage": "20",
		    "Housing and shelters": "18",
		    "Infrastructure works": "41",
		    "Institutional support": "35",
		    "Irrigation": "40",
		    "Land demarcation and titling": "32",
		    "Neighborhood improvement": "19",
		    "Pluvial drainage": "16",
		    "Roads and highways": "5",
		    "Rural Potable water": "49",
		    "Rural roads": "7",
		    "Rural Sanitation": "51",
		    "Solid waste": "17",
		    "Sustainable tourism": "26",
		    "Trade Facilitation and logistics": "21",
		    "Training to direct beneficiaries": "30",
		    "Urban Potable water": "50",
		    "Urban Sanitation": "52",
		    "Urban transport": "6",
		    "Vulnerable people support": "31",
		    "Water resources": "13",

            //Spanish

		    "Apoyo a la agricultura": "24",
		    "Aeropuertos y puertos": "9",
		    "Puentes": "8",
		    "Seguridad ciudadana": "33",
		    "Registro civil e identificación": "34",
		    "Financiamiento de créditos": "22",
		    "Apoyo directo a PYMEs": "23",
		    "Prevención de Desastres": "38",
		    "Infraestructura y equipamiento educativo": "29",
		    "Distribución de energía": "2",
		    "Generación eléctrica": "1",
		    "Transmisión eléctrica": "3",
		    "Gestión ambiental": "27",
		    "Seguridad aliment., salud animal/vegetal": "25",
		    "Infraestructura y equipamiento de salud": "28",
		    "Patrimonio histórico, cultural y natural": "20",
		    "Viviendas y refugios": "18",
		    "Obras de Infraestructura": "41",
		    "Apoyo institucional": "35",
		    "Riego": "40",
		    "Titulación y saneamiento de tierras": "32",
		    "Mejoramiento de barrios": "19",
		    "Drenaje pluvial": "16",
		    "Caminos y carreteras": "5",
		    "Agua Potable Rural": "49",
		    "Caminos rurales": "7",
		    "Saneamiento rural": "51",
		    "Residuos sólidos": "17",
		    "Turismo sostenible": "26",
		    "Facilitación y logística de intercambios": "21",
		    "Capacitación a beneficiarios directos": "30",
		    "Agua potable urbana": "50",
		    "Saneamiento urbano": "52",
		    "Transporte urbano": "6",
		    "Apoyo a grupos vulnerables": "31",
		    "Recursos hídricos": "13",

		    //French

		    "Soutien à l’Agriculture": "24",
		    "Aéroports et Ports": "9",
		    "Ponts": "8",
		    "Sécurité Citoyenne": "33",
		    "Enregistrement Civil/Pièces Identificat.": "34",
		    "Financement de Crédit": "22",
		    "Support Direct aux MPMEs": "23",
		    "Prévention de catastrophe": "38",
		    "Infraestructura y equipamiento educativo": "29",
		    "Distribution d’Energie": "2",
		    "Production d’Energie": "1",
		    "Transmission d’Energie": "3",
		    "Gestion Environnementale": "27",
		    "Sécurité Alimen., Santé Animale/Végétale": "25",
		    "Etablissements et Equipements de Santé": "28",
		    "Patrimoine Historique, Culturel et Natur": "20",
		    "Logements et Abris": "18",
		    "Travaux d’Infrastructure": "41",
		    "Support Institutionnel": "35",
		    "Irriguation": "40",
		    "Délimitation Terres/Titres de Propriété": "32",
		    "Amélioration des Quartiers": "19",
		    "Drainage Pluvial": "16",
		    "Routes et Autoroutes": "5",
		    "Eau potable rurale": "49",
		    "Routes Rurales": "7",
		    "Assainissement rural": "51",
		    "Déchets Solides": "17",
		    "Tourisme Durable": "26",
		    "Facilitation et Logistique des Echanges": "21",
		    "Formation des Bénéficiaires Directs": "30",
		    "Eau potable urbaine": "50",
		    "Assainissement urbain": "52",
		    "Transport Urbain": "6",
		    "Soutien aux Personnes Vulnérables": "31",
		    "Ressources en eau/ hydriques": "13",

		    //Portuguese

		    "O apoio à agricultura": "24",
		    "Aeroportos e portos": "9",
		    "Pontes": "8",
		    "Segurança cidadão": "33",
		    "Registro civil e identificação": "34",
		    "Financiamento de crédito": "22",
		    "Apoio directo às PME": "23",
		    "Prevenção de Desastre": "38",
		    "Instalações e equipamentos educativos": "29",
		    "Distribuição de energia": "2",
		    "Geração de energia": "1",
		    "Transmissão de energia": "3",
		    "Gestão ambiental": "27",
		    "Segurança aliment., saúde animal/vegetal": "25",
		    "As unidades de saúde e equipamentos": "28",
		    "Patrimônio Histórico, Cultural e Natural": "20",
		    "Habitação e abrigos": "18",
		    "Obras de infraestrutura": "41",
		    "O apoio institucional": "35",
		    "Irrigação": "40",
		    "Demarcação de terras e titulação": "32",
		    "Melhoramento do bairro": "19",
		    "Drenagem pluvial": "16",
		    "Estradas e rodovias": "5",
		    "Água potável  rural": "49",
		    "As estradas rurais": "7",
		    "Saneamento rural": "51",
		    "Resíduos sólidos": "17",
		    "O turismo sustentável": "26",
		    "Facilitação do comércio e logística or": "21",
		    "Treinamento para beneficiários diretos": "30",
		    "Água potável  urbana": "50",
		    "Saneamento urbano": "52",
		    "Transporte urbano": "6",
		    "Apoio as pessoas mais vulneráveis": "31",
		    "Recursos hídricos": "13",

            //Not Found

	        "Trade Facilitation":"21",
			"Drinking water production and storage": "10", //*
			"Drinking water systems": "12",                //*
			"Water resource management": "13",              //*
			"Wastewater system": "14",                      //*
			"Wastewater treatment": "15",                   //*
			"Solid waste management": "17",                 //*
			"Alternative renewable energy": "4", //*
			"Civil, birth registry & identification": "34",
			"Drinking water distribution": "11",//*
			"Other infrastructure": "41",
            "Otro tipo de Infraestructura":"41",  //*
            "Outras infraestrutura":"41"
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
