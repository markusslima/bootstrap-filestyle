/*
 * bootstrap-filestyle
 * http://dev.tudosobreweb.com.br/bootstrap-filestyle/
 *
 * Copyright (c) 2013 Markus Vinicius da Silva Lima
 * Version 2.0
 * Licensed under the MIT license.
 */
(function ($) {
    "use strict";
    
    var Filestyle = function (element, options) {
        this.options = options;
        this.$elementFilestyle = [];
        this.$element = $(element);
    };

    Filestyle.prototype = {
        clear: function () {
            this.$element.val('');
            this.$elementFilestyle.find(':text').val('');
        },

        destroy: function () {
            this.$element
                .removeAttr('style')
                .removeData('filestyle')
                .val('');
            this.$elementFilestyle.remove();
        },

        classButton: function (value) {
            if (value !== undefined) {
                this.options.classButton = value;
                this.$elementFilestyle.find('label').attr({'class': this.options.classButton});
            } else {
                return this.options.classButton;
            }
        },

        classIcon: function (value) {
            if (value !== undefined) {
                this.options.classIcon = value;
                this.$elementFilestyle.find('label .btn .glyphicon').attr({'class': this.options.classIcon});
            } else {
                return this.options.classIcon;
            }
        },

        constructor: function () {
            var _self = this,
                html = '',
                id = this.$element.attr('id'),
                files = [];

            if (id === '' || !id) {
                id = 'filestyle-'+$('.bootstrap-filestyle').length;
                this.$element.attr({'id': id});
            }

            html = '<input type="text" class="form-control '+this.options.classInput+'" disabled placeholder="Choose file"> '+
                   '<span class="input-group-btn">'+
                   '  <label for="'+id+'" class="'+this.options.classButton+'">'+
                   '	<span class="'+this.options.classIcon+'"></span> '+
                   '  </label>'+
                   '</span>';

            this.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">'+html+'</div>');

            var $label = this.$elementFilestyle.find('label');
            var $labelFocusableContainer = $label.parent();
            
            $labelFocusableContainer
                .attr('tabindex', "0")
                .keypress(function(e) {
                    if (e.keyCode === 13 || e.charCode === 32) {
                        $label.click();
                    }
                });

            // hidding input file and add filestyle
            this.$element
                .css({'position':'fixed','left':'-500px'})
                .attr('tabindex', "-1")
                .after(this.$elementFilestyle);

            // Getting input file value
            this.$element.change(function () {
                var content = '';
                if (this.files === undefined) {
                    files[0] = {'name': this.value};
                } else {
                    files = this.files;
                }

                for (var i = 0; i < files.length; i++) {
                    content += files[i].name.split("\\").pop() + ', ';
                }

                if (content !== '') {
                    _self.$elementFilestyle.find(':text').val(content.replace(/\, $/g, ''));
                }
            });

            // Check if browser is Firefox
            if (window.navigator.userAgent.search(/firefox/i) > -1) {
                // Simulating choose file for firefox
                this.$elementFilestyle.find('label').click(function () {
                    _self.$element.click();
                    return false;
                });
            }
        }
    };

    var old = $.fn.filestyle;

    $.fn.filestyle = function (option, value) {
        var get = '',
            element = this.each(function () {
                if ($(this).attr('type') === 'file') {
                    var $this = $(this),
                        data = $this.data('filestyle'),
                        options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === 'object' && option);

                    if (!data) {
                        $this.data('filestyle', (data = new Filestyle(this, options)));
                        data.constructor();
                    }

                    if (typeof option === 'string') {
                        get = data[option](value);
                    }
                }
            });

        if (typeof get !== undefined) {
            return get;
        } else {
            return element;
        }
    };

    $.fn.filestyle.defaults = {
        'classButton': 'btn btn-default',
        'classInput': '',
        'classIcon': 'glyphicon glyphicon-folder-open'
    };

    $.fn.filestyle.noConflict = function () {
        $.fn.filestyle = old;
        return this;
    };

    // Data attributes register
    $('.filestyle').each(function () {
        var $this = $(this),
            options = {
                'classButton': $this.attr('data-classButton'),
                'classInput': $this.attr('data-classInput'),
                'classIcon': $this.attr('data-classIcon')
            };

        $this.filestyle(options);
    });
})(window.jQuery);
