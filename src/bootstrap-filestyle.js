/*
 * bootstrap-filestyle
 * http://markusslima.github.com/bootstrap-filestyle/
 *
 * Copyright (c) 2013 Markus Lima
 * Licensed under the MIT license.
 */

(function ($) {
    "use strict";
    // Register plugin
    $.fn.filestyle = function (options) {
        if (typeof options === 'object' || typeof options === 'undefined'){
            var defaults = {
                buttonText : 'Choose file',
                textField : true,
                icon : false,
                classButton : '',
                classText : '',
                classIcon : 'icon-folder-open'
            };

            options = $.extend(defaults, options);

            return this.each(function () {
                var $this = $(this);
                if (!$this.data('filestyle')) {

                    var name = $this.attr("name") || $this.attr("id");

                    $this.data('filestyle', true);

                    var parent = $this.parents(".control-group");

                    if (!parent.length) {
                        parent = $('<div></div>');
                        $this.before(parent);
                        parent.append($this);
                    }

                    parent.addClass("input-append");

                    $this
                        .css({'position':'fixed','top':'-100px','left':'-100px'})
                        .after(
                            (options.textField ? '<input type="text" class="'+options.classText+'" disabled size="40" /> ' : '')+
                            '<a href="#" class="btn '+options.classButton+'" >'+
                            (options.icon ? '<i class="'+options.classIcon+'"></i> ' : '')+
                            options.buttonText+
                            '</a>'
                        );

                    $this.change(function () {
                        $this.parent().children(':text').val($(this).val().split("\\").pop());
                    });

                    $this.parent().children('a').click(function () {
                        $this.click();
                        return false;
                    });
                }
            });
        } else {
            return this.each(function () {
                var $this = $(this);
                if ($this.data('filestyle') === true && options === 'clear') {
                    $this.parent().children(':text').val('');
                    $this.val('');
                } else {
                    window.console.error('Method filestyle not defined!');
                }
            });
        }
    };
}(jQuery));
