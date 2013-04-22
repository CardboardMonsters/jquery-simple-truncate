(function($){
    $.fn.truncate = function(lines){
        lines = lines || 1;
        return this.each(function(){
            var targetHeight = parseInt($(this).css('line-height'), 10) * lines;
            var text = $(this).data('text') == undefined
                            ? $(this).text()
                            : $(this).data('text');
            $(this).data('text', text);
            var subtraction = 0;
            $(this).text(text);
            while ($(this).height() > targetHeight
                && $(this).text().length > 0)
            {
                $(this).html(text.slice(0, --subtraction) + "&hellip;");
            }
        });
    };
})(jQuery);