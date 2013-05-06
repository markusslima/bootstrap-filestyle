/*
 * bootstrap-filestyle
 * http://markusslima.github.com/bootstrap-filestyle/
 *
 * Copyright (c) 2013 Markus Vinicius da Silva Lima
 * Version 1.0.0
 * Licensed under the MIT license.
 */
!function ($) {
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

        icon: function (value) {
            if (value === true) {
                if (!this.options.icon) {
                    this.options.icon = true;
                    if (this.options.classButton !== 'btn-link' && this.options.classButton !== '')
                        var colorIcon = ' icon-white ';

                    this.$elementFilestyle.find('a').prepend('<i class="'+colorIcon+this.options.classIcon+'"></i> ');
                }
            } else if (value === false) {
                if (this.options.icon) {
                    this.options.icon = false;
                    this.$elementFilestyle.find('i').remove();
                }
            } else {
                return this.options.icon;
            }
        },

        input: function (value) {
            if (value === true) {
                if (!this.options.input) {
                    this.options.input = true;
                    this.$elementFilestyle.prepend('<input type="text" class="'+this.options.classInput+'" disabled> ');

                    var files = this.$element[0].files,
                        content = '';
                    for (var i = 0; i < files.length; i++)
                        content += files[i].name.split("\\").pop() + ', ';
                    
                    if (content !== '')
                        this.$elementFilestyle.find(':text').val(content.replace(/\, $/g, ''));
                }
            } else if (value === false) {
                if (this.options.input) {
                    this.options.input = false;
                    this.$elementFilestyle.find(':text').remove();
                }
            } else {
                return this.options.input;
            }
        },

        constructor: function () {
            var _self = this
              , $filestyle = ''
              , html = ''
              , files = []
              , colorIcon = '';

            if (this.options.input)
                html = '<input type="text" class="'+this.options.classInput+'" disabled> ';

            html += '<a href="#" class="btn '+this.options.classButton+'">';

            if (this.options.icon) {
                if (this.options.classButton !== 'btn-link' && this.options.classButton !== '')
                    colorIcon = ' icon-white ';

                html += '<i class="'+colorIcon+this.options.classIcon+'"></i> ';
            }

            html += this.options.buttonText+'</a>';

            this.$elementFilestyle = $('<div style="display: inline;">'+html+'</div>');

            // hidding input file and add filestyle
            this.$element
                .css({'position':'fixed','top':'-500px','left':'-500px'})
                .after(this.$elementFilestyle);

            // Getting input file value
            this.$element.change(function () {
                var content = '';
                if (this.files === undefined)
                    files[0] = {name: this.value};
                else
                    files = this.files;
                
                for (var i = 0; i < files.length; i++)
                    content += files[i].name.split("\\").pop() + ', ';
                
                if (content !== '')
                    _self.$elementFilestyle.find(':text').val(content.replace(/\, $/g, ''));
            });

            // Simulating choose file
            this.$elementFilestyle.find('a').click(function () {
                _self.$element.click();
                return false;
            });
        }
    };

    var old = $.fn.filestyle;

    $.fn.filestyle = function (option, value) {
        var get = undefined
          , element = this.each(function () {
                if ($(this).attr('type') == 'file') {
                    var $this = $(this)
                      , data = $this.data('filestyle')
                      , options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === 'object' && option);

                    if (!data) {
                        $this.data('filestyle', (data = new Filestyle(this, options)));
                        data.constructor();
                    }

                    if (typeof option === 'string') 
                        get = data[option](value);
                }
            });

        if (typeof get !== undefined)
            return get;
        else
            return element;
    };

    $.fn.filestyle.defaults = {
        buttonText: 'Choose file',
        input: true,
        icon: true,
        classButton: '',
        classInput: 'input-large',
        classIcon: 'icon-folder-open'
    };

    $.fn.filestyle.noConflict = function () {
        $.fn.filestyle = old;
        return this;
    };

}(window.jQuery);