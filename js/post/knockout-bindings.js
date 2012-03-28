/// <reference path="knockout-1.3.0-beta-debug.js" />
(function ($, ko) {

    // signal for all menus to avoid delay when another menu is selected
    var menuSelected = new signals.Signal();
    ko.bindingHandlers['highlightable'] = {
        init: function (element, valueAccessor) {
            var link = $(element);
            $(element).hover(function (obj) {
                $(element).addClass("highlighted");
            },
            function (obj) {
                $(element).removeClass("highlighted");
            });
        }
    };
    // This binding handler is used to define behavior of top menus
    ko.bindingHandlers['menu'] = {
        init: function (element, valueAccessor) {
            var options = ko.utils.unwrapObservable(valueAccessor());
            var link = $(element);
            var parent = link; //link.parent();
            options.timeout = options.timeout || 200;
            options.offset = options.offset || 0;
            options.attachment = options.attachment || 'left';
            var menu = $("#" + options.id);
            var content = menu.children('.content');

            // hiding the dropdown
            function hide() {
                menu.hide();
                parent.removeClass('highlighted');
            }
            var id = 0;

            // hooking to the event
            menuSelected.add(function () { if (id > 0) window.clearTimeout(id); hide() });

            // handlers for menu item
            link.mouseover(function (e) {
                // letting other menus know it's time to close without the delay
                menuSelected.dispatch();
                if (id > 0) window.clearTimeout(id);
                var at = parent.offset();
                var width = parent.outerWidth(false);
                if (options.bottom) {
                    if (options.attachment == 'left') {
                        menu.css({ position: 'absolute', left: (at.left + options.offset) + 'px', bottom: '43px' });
                    } else if (options.attachment == 'right') {
                        menu.css({ position: 'absolute', right: (window.document.body.clientWidth - (at.left + width + options.offset)) + 'px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'anchorright') {
                        menu.css({ position: 'absolute', right: '0px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'anchorright') {
                        menu.css({ position: 'absolute', left: '0px', top: at.top + parent.outerHeight() + 'px' });
                    }
                } else {
                    if (options.attachment == 'left') {
                        menu.css({ position: 'absolute', left: (at.left + options.offset) + 'px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'right') {
                        menu.css({ position: 'absolute', right: (window.document.body.clientWidth - (at.left + width + options.offset)) + 'px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'anchorright') {
                        menu.css({ position: 'absolute', right: '0px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'anchorleft') {
                        menu.css({ position: 'absolute', left: '0px', top: at.top + parent.outerHeight() + 'px' });
                    }
                }
                //content.css({ 'max-height': (window.document.body.clientHeight - 200) + 'px' });
                parent.addClass('highlighted');
                menu.show();
                if (options.focus) {
                    $("#" + options.focus)[0].focus();
                }
            }).mouseout(function (e) {
                // closing the window with the delay
                if (id > 0) window.clearTimeout(id);
                id = window.setTimeout(hide, options.timeout);
            });

            // handlers for dropdown
            menu.mouseover(function () {
                // abort closing
                window.clearTimeout(id);
            }).mouseout(function () {
                if (id > 0) window.clearTimeout(id);
                id = window.setTimeout(hide, options.timeout);
            });

            link.attr('href', '#');
        }
    };

    // this binding handler defines behavior of slide windows
    ko.bindingHandlers['slide'] = {
        init: function (element, valueAccessor) {

        },
        update: function (element, valueAccessor) {
            var options = ko.utils.unwrapObservable(valueAccessor());
            var visible = ko.utils.unwrapObservable(options.value);
            var callback = options.callback;
            $(element)['slide' + (visible ? 'Down' : 'Up')](function () {
                if (options.handleSelector) {
                    $(options.handleSelector)[(visible ? 'add' : 'remove') + 'Class']('expanded');
                }
                if (callback) {
                    callback();
                }
            });
        }
    };

    // this binding handler helps to bind css display
    ko.bindingHandlers['display'] = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            element.style.display = value ? 'block' : 'none';
        }
    };

    // this binding helps center windows when a property changes it's value
    ko.bindingHandlers['centerWhen'] = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            if (value) {
                window.setTimeout(function () {
                    element.style.left = Math.round((document.body.clientWidth - element.clientWidth) / 2) + 'px';
                    element.style.top = Math.round((document.body.clientHeight - element.clientHeight) / 2) + 'px';
                }, 0);
            }
        }
    }

    ko.bindingHandlers.fadeVisible = {
        init: function (element, valueAccessor) {
            // Initially set the element to be instantly visible/hidden depending on the value
            var value = valueAccessor();
            $(element).toggle(ko.utils.unwrapObservable(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
        },
        update: function (element, valueAccessor) {
            // Whenever the value subsequently changes, slowly fade the element in or out
            var value = valueAccessor();
            ko.utils.unwrapObservable(value) ? $(element).fadeIn(100) : $(element).fadeOut(100);
        }
    };

} (jQuery, ko));

String.prototype.startsWith = function (str, ignoreCase) {
    if (ignoreCase) {
        return this.slice(0, str.length).toLowerCase() == str.toLowerCase();
    } else {
        return this.slice(0, str.length) == str;
    }
};
