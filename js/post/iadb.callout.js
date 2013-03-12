var iadb = (function (iadb) {
    (iadb['CalloutBase'] = function (items, element) {
        this.fadingTime = 1000;
        this.element = element;
        this.parent = parent;
        this.items = ko.observableArray(items || []);
        this.index = ko.observable(-1);
        this.current = ko.dependentObservable(function () {
            var index = this.index();
            return index < 0 ? null : this.items()[index];
        }, this);
        this.visible = ko.observable(false); // ko.dependentObservable(function () { return this.index() >= 0; }, this);
        this.ordinal = ko.dependentObservable(function () { return this.index() + 1; }, this);
        this.count = ko.dependentObservable(function () { return this.items().length; }, this);
        this.changedSelection = new signals.Signal();
    }).prototype = {
        preProcessItem: function (item) {
            return item;
        },
        show: function (items) {
            var $self = this;
            this.visible(false);
            setTimeout(function () {
                this.clear();
                var callout = this;
                Enumerable.From(items).ForEach(function (x) { callout.add($self.preProcessItem(x)); });
                this.first();
                this.visible(true);
            } .bind(this), 100);
        },
        fadeOut: function (callback) {
            this.element.fadeOut(this.fadingTime, callback);
        },
        fadeIn: function (callback) {
            this.element.fadeIn(this.fadingTime, callback);
        },
        clear: function () {
            this.visible(false);
            this.index(-1);
            this.items.removeAll();
        },
        add: function (item) {
            this.items.push(item);
        },
        first: function (show) {
            this.index(this.count() > 0 ? 0 : -1);
        },
        next: function () {
            var index = this.index();
            index++;
            if (index >= this.count()) {
                index = 0;
            }
            this.index(index);
            this.changedSelection.dispatch(this.current());
            return false;
        },
        prev: function () {
            var index = this.index();
            index--;
            if (index < 0) {
                index = this.count() - 1;
            }
            this.index(index);
            this.changedSelection.dispatch(this.current());
            return false;
        }
    };

    (iadb['LayoutCallout'] = function (items, element) {
        // add html to items        
        var retValue = new iadb['CalloutBase'](items, element);
        retValue.preProcessItem = function (item) {
            item.properties = [];
            for (var property in item) {
                if (typeof (item[property]) != "object" && property != 'id' && property != 'layer' && property != 'geometry' && property != 'latitude' && property != 'longitude') {
                    item.properties.push({ name: property, value: item[property].toString() ? item[property].toString() : " " });
                }
            }
            return item;
        };
        return retValue;
    });
    
    (iadb['IicCallout'] = function (items, element) {
        // add html to items        
        var retValue = new iadb['CalloutBase'](items, element);
        retValue.preProcessItem = function (item) {
            item.properties = [];
            for (var property in item) {
                if (typeof (item[property]) != "object") {
                    item.properties.push({ name: property, value: item[property].toString() ? item[property].toString() : " " });
                }
            }
            return item;
        };
        return retValue;
    });

    (iadb['TffpCallout'] = function (items, element) {
        // add html to items
        var retValue = new iadb['CalloutBase'](items, element);
        retValue.preProcessItem = function (item) {
            item.properties = [];
            for (var property in item) {
                if (typeof (item[property]) != "object") {
                    item.properties.push({ name: property, value: item[property].toString() ? item[property].toString() : " " });
                }
            }
            return item;
        };
        return retValue;
    });

    (iadb['Callout'] = function (items, element) {
        var retValue = new iadb['CalloutBase'](items, element);
        retValue.resultPicked = new signals.Signal();
        retValue.relatedOutputs = new signals.Signal();
        retValue.showRelatedProject = function () {
            var current = this.current();
            if (current != null) {
                this.resultPicked.dispatch(current.outputid);
            }
            return false;
        };
        retValue.showRelatedOutputs = function () {
            var current = this.current();
            this.relatedOutputs.dispatch(current.outputid);
        }
        return retValue;
    });


    (iadb['ProjectPicker'] = function (items) {
        this.items = ko.observableArray(items || []);
        this.projectPicked = new signals.Signal();
        this.visible = ko.dependentObservable(function () {
            var items = this.items();
            var result = items.length > 0;
            return result;
        }, this);
    }).prototype = {
        pick: function (item) {
            if (item) {
                this.projectPicked.dispatch(item.id);
            }
        },
        hide: function () {
            this.items.removeAll();
        }
    };

    return iadb;
} (iadb || {}));
