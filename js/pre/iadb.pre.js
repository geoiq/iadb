var iadb = (function (ns, ko, window) {


	var en;
	var vocabulary = {
		en: en = {
			selectCountry: 'Select Country',
			projects: 'Projects',
			sectors: 'Sectors',
			sector: 'Sector',
			priorities: 'Targets',
			priority: 'Target',
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
			selectProject: 'Select a project in this location',
			CC: 'Environmental Sustainability',
			sAG: 'Agriculture and Rural Development',
			sAS: 'Water and Sanitation',
			sDU: 'Urban Development and Housing',
			sED: 'Education',
			sEN: 'Energy',
			sFM: 'Financial Markets',
			sIN: 'Industry',
			sIS: 'Social Investment',
			sOT: 'Other',
			sPA: 'Environment and Natural Disasters',
			sPS: 'Private Firms and SME Development',
			sRI: 'Regional Integration',
			sRM: 'Reform/Modernization of the State',
			sSA: 'Health',
			sST: 'Science and Technology',
			sTD: 'Trade',
			sTR: 'Transport',
			sTU: 'Sustainable Tourism',
			Agricultural_support:	'Agricultural support',
			Airports_and_ports:	'Airports and ports',
			Alternative_renewable_energy:	'Alternative renewable energy',
			Bridges:	'Bridges',
			Citizen_security:	'Citizen security',
			Civil_birth_registry_identification:	'Civil, birth registry & identification',
			Credit_financing:	'Credit financing',
			Direct_support_to_MSME:	'Direct support to MSME',
			Drinking_water_distribution:	'Drinking water distribution',
			Drinking_water_production_and_storage:	'Drinking water production and storage',
			Drinking_water_systems:	'Drinking water systems',
			Educational_facilities_and_equipment:	'Educational facilities and equipment',
			Energy_distribution:	'Energy distribution',
			Energy_generation:	'Energy generation',
			Energy_transmission:	'Energy transmission',
			Environmental_management:	'Environmental management',
			Food_safety_animal_and_plant_health:	'Food safety, animal and plant health',
			Health_facilities_and_equipment:	'Health facilities and equipment',
			Historical_Cultural_Natural_Heritage:	'Historical, Cultural & Natural Heritage',
			Housing_and_shelters:	'Housing and shelters',
			Institutional_support:	'Institutional support',
			Land_demarcation_and_titling:	'Land demarcation and titling',
			Neighborhood_improvement:	'Neighborhood improvement',
			NO_VISUALIZABLE:	'NO VISUALIZABLE',
			Pluvial_drainage:	'Pluvial drainage',
			Roads_and_highways:	'Roads and highways',
			Rural_roads:	'Rural roads',
			Solid_waste_management:	'Solid waste management',
			Sustainable_tourism:	'Sustainable tourism',
			Trade_Facilitation:	'Trade Facilitation',
			Training_to_direct_beneficiaries:	'Training to direct beneficiaries',
			Urban_transport:	'Urban transport',
			Vulnerable_people_support:	'Vulnerable people support',
			Wastewater_system:	'Wastewater system',
			Wastewater_treatment:	'Wastewater treatment',
			Water_resource_management:	'Water resource management'
			
		},
		es: propotyped({
			selectCountry: 'Seleccione el país',
			projects: 'Proyectos',
			sectors: 'Sectores',
			sector: 'Sector',
			priorities: 'Metas',
			priority: 'Meta',
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
			selectProject: 'Seleccione un proyecto en esta ubicación',
			CC: 'Sostenibilidad Ambiental',
			sAG: 'Agricultura Y Desarrollo Rural',
			sAS: 'Agua Y Saneamiento',
			sDU: 'Desarrollo Urbano Y Vivienda',
			sED: 'Educación',
			sEN: 'Energía',
			sFM: 'Mercados Financieros',
			sIN: 'Industria',
			sIS: 'Inversión Social',
			sOT: 'Otros',
			sPA: 'Medio Ambiente Y Desastres Naturales',
			sPS: 'Empresas Priv Y Desarrollo De Pyme',
			sRI: 'Integración Regional',
			sRM: 'Reforma/Modernización Del Estado',
			sSA: 'Salud',
			sST: 'Ciencia Y Tecnología',
			sTD: 'Comercio',
			sTR: 'Transporte',
			sTU: 'Turismo Sostenible',
			Agricultural_support:	'Apoyo a la agricultura',
		   Airports_and_ports:	'Aeropuertos y puertos',
		   Alternative_renewable_energy:	'Energía alternativa o renovable',
		   Bridges: 	'Puentes',
		   Citizen_security: 	'Seguridad ciudadana',
		   Civil_birth_registry_identification:	'Registro civil e identificación ',
		   Credit_financing: 	'Financiamiento de créditos',
		   Direct_support_to_MSME:	'Apoyo directo a PYMEs',
		   Drinking_water_distribution:	'Distribución de agua potable',
		   Drinking_water_production_and_storage:	'Producción y almacenamiento de agua potable',
		   Drinking_water_systems:	'Sistemas de agua potable',
		   Educational_facilities_and_equipment:	'Infraestructura y equipamiento educativo ',
		   Energy_distribution: 	'Distribución de energía',
		   Energy_generation: 	'Generación eléctrica',
		   Energy_transmission:	'Transmisión eléctrica',
		   Environmental_management: 	'Gestión ambiental',
		   Food_safety_animal_and_plant_health:	'Seguridad alimentaria, salud animal y vegetal',
		   Health_facilities_and_equipment:	'Infraestructura y equipamiento de salud',
		   Historical_Cultural_Natural_Heritage:	'Patrimonio histórico, cultural y natural',
		   Housing_and_shelters:	'Viviendas y refugios',
		   Institutional_support: 	'Apoyo institucional',
		   Land_demarcation_and_titling:	'Titulación y saneamiento de tierras',
		   Neighborhood_improvement:	'Mejoramiento de barrios',
		   NO_VISUALIZABLE: 	'NO VISUALIZABLE',
		   Pluvial_drainage:	'Drenaje pluvial',
		   Roads_and_highways:	'Caminos y carreteras',
		   Rural_roads:	'Caminos rurales',
		   Solid_waste_management:	'Gestión de residuos sólidos',
		   Sustainable_tourism:	'Turismo sostenible',
		   Trade_Facilitation:	'Facilitación a intercambios comerciales',
		   Training_to_direct_beneficiaries:	'Capacitación a beneficiarios directos',
		   Urban_transport: 	'Transporte urbano',
		   Vulnerable_people_support:	'Apoyo a grupos vulnerables',
		   Wastewater_system:	'Sistemas de saneamiento básico',
		   Wastewater_treatment:	'Manejo de aguas residuales ',
		   Water_resource_management:	'Manejo de recursos hídricos'
		   
		}, en),
		fr: propotyped({
			selectCountry: 'Choisir le pays',
			projects: 'Projets',
			sectors: 'Secteurs',
			sector: 'Secteur',
			priorities: 'Objectifs',
			priority: 'Objectif',
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
			selectProject: 'Selecione um projeto neste local',
			CC: 'Durabilité Environnementale',
			sAG: 'Agriculture et Développement Rural',
			sAS: 'Eau et Assainissement',
			sDU: 'Développement Urbain et Logement',
			sED: 'Éducation',
			sEN: 'Énergie',
			sFM: 'Marchés Financiers',
			sIN: 'Industrie',
			sIS: 'Investissement Social',
			sOT: 'Autres',
			sPA: 'Environnement Et Catastrophes Naturelles',
			sPS: 'Entreprises Privées et Développement Des PME',
			sRI: 'Intégration Régionale',
			sRM: 'Réforme/Modernisation de l\'État',
			sSA: 'Santé',
			sST: 'Science et Technologie',
			sTD: 'Commerce',
			sTR: 'Transport',
			sTU: 'Développement Durable',
			Agricultural_support:	'Soutien à l’Agriculture',
		   Airports_and_ports:	'Aéroports et Ports',
		   Alternative_renewable_energy:	'Energie Alternative ou Renouvelable',
		   Bridges: 	'Ponts',
		   Citizen_security: 	'Sécurité Citoyenne',
		   Civil_birth_registry_identification:	'Enregistrement Civil, Actes de Naissance et Pièces d’Identification',
		   Credit_financing: 	'Financement de Crédit ',
		   Direct_support_to_MSME:	'Support Direct aux MPMEs',
		   Drinking_water_distribution:	'Distribution d’Eau Potable',
		   Drinking_water_production_and_storage:	'Production et Stockage d’Eau Potable',
		   Drinking_water_systems:	'Systèmes d’eau Potable',
		   Educational_facilities_and_equipment:	'Etablissements et Equipements Scolaires',
		   Energy_distribution: 	'Distribution d’Energie ',
		   Energy_generation: 	'Production d’Energie ',
		   Energy_transmission:	'Transmission d’Energie ',
		   Environmental_management: 	'Gestion Environnementale',
		   Food_safety_animal_and_plant_health:	'Sécurité Alimentaire; Santé Animale et Végétale',
		   Health_facilities_and_equipment:	'Etablissements et Equipements de Santé',
		   Historical_Cultural_Natural_Heritage:	'Patrimoine Historique, Culturel et Naturel',
		   Housing_and_shelters:	'Logements et Abris',
		   Institutional_support: 	'Support Institutionnel',
		   Land_demarcation_and_titling:	'Délimitation des Terres et Titres de Propriété',
		   Neighborhood_improvement:	'Amélioration des Quartiers',
		   NO_VISUALIZABLE: 	'NON VISUALISABLE',
		   Pluvial_drainage:	'Drainage Pluvial',
		   Roads_and_highways:	'Routes et Autoroutes',
		   Rural_roads:	'Routes Rurales',
		   Solid_waste_management:	'Gestion des Déchets Solides',
		   Sustainable_tourism:	'Tourisme Durable',
		   Trade_Facilitation:	'Facilitation des Echanges Commerciaux.',
		   Training_to_direct_beneficiaries:	'Formation des Bénéficiaires Directs',
		   Urban_transport: 	'Transport Urbain',
		   Vulnerable_people_support:	'Soutien aux Personnes Vulnérables',
		   Wastewater_system:	'Système de Traitement des Eaux Usées',
		   Wastewater_treatment:	'Gestion des Ressources en Eau',
		   Water_resource_management:	'La gestion des ressources en eau'
		   
		}, en),
		pt: propotyped({
			selectCountry: 'Selecione um país',
			projects: 'Projetos',
			sectors: 'Setores',
			sector: 'Setor',
			priorities: 'Metas',
			priority: 'Meta',
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
			selectProject: 'Sélectionnez un projet dans ce lieu',
			CC: 'Sustentabilidade Ambiental',
			sAG: 'Agricultura E Desenvolvimento Rural',
			sAS: 'Água E Saneamento',
			sDU: 'Desenvolvimento Urbano E Moradia',
			sED: 'Educação',
			sEN: 'Energia',
			sFM: 'Mercados Financeiros',
			sIN: 'Indústria',
			sIS: 'Investimento Social',
			sOT: 'Outros',
			sPA: 'Meio Ambiente E Desastres Naturais',
			sPS: 'Empresas Privadas E Desenvolvimento Das PME',
			sRI: 'Integração Regional',
			sRM: 'Reforma/Modernização Do Estado',
			sSA: 'Saúde',
			sST: 'Ciência E Tecnologia',
			sTD: 'Comércio',
			sTR: 'Transporte',
			sTU: 'Turismo Sustentável',
			Agricultural_support:	'O apoio à agricultura',
		   Airports_and_ports:	'Aeroportos e portos',
		   Alternative_renewable_energy:	'Energia renovável alternativa',
		   Bridges: 	'Pontes',
		   Citizen_security: 	'Segurança cidadão',
		   Civil_birth_registry_identification:	'Registro civil de nascimento, e identificação',
		   Credit_financing: 	'Financiamento de crédito',
		   Direct_support_to_MSME:	'Apoio directo às PME',
		   Drinking_water_distribution:	'Distribuição de água potável',
		   Drinking_water_production_and_storage:	'Produção de água potável e de armazenamento',
		   Drinking_water_systems:	'Sistemas de água potável',
		   Educational_facilities_and_equipment:	'Instalações e equipamentos educativos',
		   Energy_distribution: 	'Distribuição de energia',
		   Energy_generation: 	'Geração de energia',
		   Energy_transmission:	'Transmissão de energia',
		   Environmental_management: 	'Gestão ambiental',
		   Food_safety_animal_and_plant_health:	'Segurança alimentar, saúde animal e vegetal',
		   Health_facilities_and_equipment:	'As unidades de saúde e equipamentos',
		   Historical_Cultural_Natural_Heritage:	'Patrimônio Histórico, Cultural e Natural',
		   Housing_and_shelters:	'Habitação e abrigos',
		   Institutional_support: 	'O apoio institucional',
		   Land_demarcation_and_titling:	'Demarcação de terras e titulação',
		   Neighborhood_improvement:	'Melhoramento do bairro',
		   NO_VISUALIZABLE: 	'Não visualizáveis',
		   Pluvial_drainage:	'Drenagem pluvial',
		   Roads_and_highways:	'Estradas e rodovias',
		   Rural_roads:	'As estradas rurais',
		   Solid_waste_management:	'Gestão de resíduos sólidos',
		   Sustainable_tourism:	'O turismo sustentável',
		   Trade_Facilitation:	'Facilitação do Comércio',
		   Training_to_direct_beneficiaries:	'Treinamento para os beneficiários diretos',
		   Urban_transport: 	'Transporte urbano',
		   Vulnerable_people_support:	'Apoio as pessoas mais vulneráveis',
		   Wastewater_system:	'Sistema sanitário',
		   Wastewater_treatment:	'Tratamento de águas residuais',
		   Water_resource_management:	'Gestão dos recursos hídricos'
		   
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