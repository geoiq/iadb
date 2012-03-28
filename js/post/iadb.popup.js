var iadb = (function (iadb, ko) {

    (iadb['Popup'] = function () {
        this.visible = ko.observable(false);
        this.url = ko.observable('');
        this.width = ko.observable(100);
        this.height = ko.observable(100);
        this.scrolling = ko.observable("auto");
    }).prototype = {
        close: function () {
            this.visible(false);
            this.url('');
            return false;
        },
        show: function (url, size, scrolling) {
            size = size || this.defaultSize;
            this.url(url);
            this.width(size.width);
            this.height(size.height);
            this.visible(true);
            this.scrolling(scrolling);
            return false;
        },
        defaultSize: { width: 900, height: 500 }
    };


    return iadb;
   } (iadb || {}, ko));
