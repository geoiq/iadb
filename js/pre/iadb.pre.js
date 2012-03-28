var iadb = (function (ns, ko, window) {


	var en;
	var vocabulary = {
		en: en = {
			selectCountry: 'Select Country',
			projects: 'Projects',
			sectors: 'Sectors',
			sector: 'Sector',
			results: 'Results',
			dataLayers: 'Data Layers',
			back: 'Back',
			map: 'Map',
			projectGallery: 'Project Gallery',
			share: 'Share',
			partners: 'Partners',
			project: 'Project',
			projectN: 'Project #',
			projectName: 'Project Name',
			selectAll: 'Select All',
			whatsShown: 'What\'s Shown',
			legend: 'Legend',
			noLayersSelected: 'There are no layers selected',
			pressEsc: 'Press esc to close',
			projectNumber: 'Project number',
			photos: 'Photos',
			projectInfo: 'Project info',
			readMore: 'Read more',
			readLess: 'Read less',
			showingResults1: 'Showing',
			showingResults2: 'of',
			showingResults3: 'results',
			mediaNotAvaliable: 'Photos and videos are not available',
			showProjectInfo: 'Show project information',
			shotRelatedOutputs: 'Show related outputs',
			loading: 'Loading',
			videos: 'Videos',
			documents: 'Documents',
			news: 'News',
			noProjectsFound: 'There are no projects with the criteria specified',
			countries: 'Country',
			HA: 'Haiti',
			GY: 'Guyana',
			NI: 'Nicaragua',
			HO: 'Honduras',
			PA: 'Paraguay',
			BO: 'Bolivia',
			UR: 'Uruguay',
			selectProject: 'Select a project in this location'
		},
		es: propotyped({
			selectCountry: 'Seleccione el país',
			projects: 'Proyectos',
			sectors: 'Sectores',
			sector: 'Sector',
			results: 'Resultados',
			dataLayers: 'Capas de datos',
			back: 'Volver',
			map: 'Mapa',
			projectGallery: 'Galería de Proyectos',
			share: 'Compartir',
			partners: 'Socios',
			project: 'Proyecto',
			projectN: 'Núm. del Proyecto',
			projectName: 'Nombre del proyecto',
			selectAll: 'Seleccionar todos',
			whatsShown: 'Lo que se muestra',
			legend: 'Leyenda',
			noLayersSelected: 'No hay capas seleccionadas',
			pressEsc: 'Presione ESC para cerrar',
			projectNumber: 'Número del proyecto',
			photos: 'Fotos',
			projectInfo: 'Información del Proyecto',
			readMore: 'Lea más',
			readLess: 'Lea menos',
			showingResults1: 'Mostrando',
			showingResults2: 'de',
			showingResults3: 'resultados',
			mediaNotAvaliable: 'Fotos y videos no disponibles',
			showProjectInfo: 'Muestra información del proyecto',
			shotRelatedOutputs: 'Muestra resultados relacionados',
			loading: 'Cargando, por favor espere',
			videos: 'Videos',
			documents: 'Documentos',
			news: 'Noticias',
			noProjectsFound: 'No hay proyectos con los criterios especificados',
			countries: 'Países',
			HA: 'Haití',
			GY: 'Guyana',
			NI: 'Nicaragua',
			HO: 'Honduras',
			PA: 'Paraguay',
			BO: 'Bolivia',
			UR: 'Uruguay',
			selectProject: 'Seleccione un proyecto en esta ubicación'
		}, en),
		fr: propotyped({
			selectCountry: 'Choisir le pays',
			projects: 'Projets',
			sectors: 'Secteurs',
			sector: 'Secteur',
			results: 'Résultats',
			dataLayers: 'Couches de données',
			back: 'Retour',
			map: 'Carte',
			projectGallery: 'Galerie de projets',
			share: 'Partager',
			partners: 'Partenaires',
			project: 'Projet',
			projectN: 'No. du projet',
			projectName: 'Nom du projet',
			selectAll: 'Sélectionner tout',
			whatsShown: 'Ce qui est affiché',
			legend: 'Légende',
			noLayersSelected: 'Il n\'ya pas de couches sélectionnées',
			pressEsc: 'Appuyez sur Échap',
			projectNumber: 'Numéro de projet',
			photos: 'Photos',
			projectInfo: 'Informations sur le projet',
			readMore: 'Lire plus',
			readLess: 'Lire moins',
			showingResults1: 'Affichage',
			showingResults2: 'de',
			showingResults3: 'résultats',
			mediaNotAvaliable: 'Photos et vidéos ne sont pas disponibles',
			showProjectInfo: 'Affiche des informations de projet',
			shotRelatedOutputs: 'Afficher les résultats liés',
			loading: 'Chargement, s\'il vous plaît attendre',
			videos: 'Vídeos',
			documents: 'Documents',
			news: 'Nouvelles',
			noProjectsFound: 'Il n\'y a pas de projets avec les critères spécifiés',
			countries: 'Pays',
			HA: 'Haïti',
			GY: 'Guyana',
			NI: 'Nicaragua',
			HO: 'Honduras',
			PA: 'Paraguay',
			BO: 'Bolivie',
			UR: 'Uruguay',
			selectProject: 'Selecione um projeto neste local'
		}, en),
		pt: propotyped({
			selectCountry: 'Selecione um país',
			projects: 'Projetos',
			sectors: 'Setores',
			sector: 'Setor',
			results: 'Resultados',
			dataLayers: 'Camada de dados',
			back: 'Voltar',
			map: 'Mapa',
			projectGallery: 'Galeria de projetos',
			share: 'Compartilhar',
			partners: 'Parceiros',
			project: 'Projeto',
			projectN: 'Núm. de Projeto',
			projectName: 'Nome do projeto',
			selectAll: 'selecione Todos os',
			whatsShown: 'O que é mostrado',
			legend: 'Lenda',
			noLayersSelected: 'Não há camadas selecionadas',
			pressEsc: 'Pressione Esc para fechar',
			projectNumber: 'Número do projeto',
			photos: 'Fotos',
			projectInfo: 'Informações do Projeto',
			readMore: 'Leia mais',
			readLess: 'Leia menos',
			showingResults1: 'Mostrando',
			showingResults2: 'de',
			showingResults3: 'resultados',
			mediaNotAvaliable: 'Fotos e vídeos não estão disponíveis',
			showProjectInfo: 'Exibe informações sobre o projeto',
			shotRelatedOutputs: 'Mostrar resultados relacionados',
			loading: 'Carregando, por favor aguarde',
			videos: 'Vidéos',
			documents: 'Documentos',
			news: 'Notícia',
			noProjectsFound: 'Não há projetos com os critérios especificados',
			countries: 'Países',
			HA: 'Haiti',
			GY: 'Guiana',
			NI: 'Nicarágua',
			HO: 'Honduras',
			PA: 'Paraguai',
			BO: 'Bolívia',
			UR: 'Uruguai',
			selectProject: 'Sélectionnez un projet dans ce lieu'
		}, en)
	};

	ns.getCurrentLanguage = function () {
		var hash = window.location.hash || '';
		var match = hash.match(/#\/iadb\/(en|es|fr|pt)/);
		if (match && match[1])
			return match[1];
		return 'en';
	};

	ns.getCurrentCountry = function () {
		var hash = window.location.hash || '';
		var match = hash.match(/#\/iadb\/(en|es|fr|pt)\/(.*?)\//);
		var countryName = "haiti";
		if (match && match[2])
			countryName = match[2];
		var currentCountry = ko.utils.arrayFirst(ns['Country'].countries, function (value) {
			return (value.name.toLowerCase() == countryName.toLowerCase())
		});
		return currentCountry;
	};

	ns.write = function (lang, key) {
		var text = lang[key];
		document.write(text());
	}

	function propotyped(values, prototype) {
		var fn = function () {
			for (var key in values) {
				if (values.hasOwnProperty(key)) {
					this[key] = values[key];
				}
			}
		};
		fn.prototype = prototype;
		return new fn();
	}


	ns['Lang'] = function (defaultLanguage) {
		defaultLanguage = defaultLanguage || 'en';
		this.language = ko.observable(defaultLanguage);
		for (var key in vocabulary.en) {
			if (!vocabulary.en.hasOwnProperty(key)) continue;
			this[key] = ko.dependentObservable(function () { return vocabulary[this.language()][key]; }, this);
		}
	};

	ns['Lang'].prototype = {
		dispose: function () {
			for (var key in this) {
				if (this.hasOwnProperty(key)) {
					var something = this[key];
					if (something && something.dispose) {
						something.dispose();
					}
					this[key] = null;
					delete this[key];
				}
			}
		}
	};

	ns.getProjectGalleryLink = function () {
		var country = ns.getCurrentCountry();
		var language = ns.getCurrentLanguage();
		return "http://www.iadb.org/mapamericas/projectgallery/?country=" + country.abbr + "&lang=" + language;
	};

	ns.getPartnersLink = function () {
		var language = ns.getCurrentLanguage();
		return "http://www.iadb.org/mapamericas/partners/?lang=" + language;
	};

	ns.getShareLink = function () {
		var country = ns.getCurrentCountry();
		var language = ns.getCurrentLanguage();
		var hash = window.location.hash;
		if (hash != null && hash.length) {
			hash = hash.substr(1);
			return "http://www.iadb.org/" + language + "/mapamericas/" + country.name + "/?projectID=" + hash;
		} else {
			return "http://www.iadb.org/" + language + "/mapamericas/" + country.name + "/";
		}
	};

	ns['Country'] = {
		countries: [
        { "name": "Haiti", abbr: "HA", maps: { "en": 37, "es": 81, "pt": 83, "fr": 82} },
        { "name": "Bolivia", abbr: "BO", maps: { "en": 103, "es": 104, "pt": 116, "fr": 115} },
        { "name": "Guyana", abbr: "GY", maps: { "en": 102, "es": 101, "pt": 123, "fr": 119} },
        { "name": "Honduras", abbr: "HO", maps: { "en": 100, "es": 99, "pt": 125, "fr": 124} },
        { "name": "Nicaragua", abbr: "NI", maps: { "en": 98, "es": 97, "pt": 127, "fr": 126} },
        { "name": "Uruguay", abbr: "UR", maps: { "en": 131, "es": 132, "pt": 134, "fr": 133} }
        ],
		getMapId: function () {
			var currentCountryName = ns.getCurrentCountry().name.toLowerCase();
			var currentCountry = ko.utils.arrayFirst(ns['Country'].countries, function (value) {
				return (value.name.toLowerCase() == currentCountryName)
			});
			if (currentCountry) {
				return currentCountry.maps[iadb.getCurrentLanguage()];
			}
			return 37;
		}
	}
	return ns;
} (iadb || {}, ko, window));