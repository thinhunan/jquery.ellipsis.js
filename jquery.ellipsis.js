/// <reference path="jquery-1.9.1.intellisense.js" />
/// author: Think Tam @2013-5-15

(function ($) {
    function ellipsis($elem, options) {
        var max = options.maxWidth;
        if (!max) {
            max = $elem.width();
        }
        max = max * options.maxLine;
        var text = $.trim($elem.text()).replace(' ','　');　
        var $temp_elem = $elem.clone(false)
            .css({ "visibility": "hidden", "whiteSpace": "nowrap","width":"auto" })
            .appendTo(document.body);
        var width = $temp_elem.width();
        var stop = text.length;
        while (width > max && stop > 1) {
            stop--;
            var temp_str = text.substring(0, stop) + ellipsis_char;
            width = $temp_elem.text(temp_str).width();
        }
        $elem.text($temp_elem.text().replace('　',' '));
        $temp_elem.remove();
    }

    var ellipsis_char = '...';

    var defaults = {
        maxWidth: 0,
        maxLine: 1
    };

    $.fn.ellipsis = function (options) {
        return this.each(function () {
            var $elem = $(this);
            var opts = $.extend({}, defaults, options);
            ellipsis($elem, opts);
        });
    };

    $.fn.ellipsis.options = defaults;
})(jQuery);
