JQuery-Simple-Truncate
======================

Need to truncate text after a number of lines?

For example:

> This text will get truncated to  
> two lines. No seriously  
> anything that pushes it over  
> will get truncated  

Using this:

    $('div#some-elem').truncate(2);

Will give:

> This text will get truncated to  
> two lines. No seriously&hellip;  

Just want a single line?

    $('.title').truncate();
    
Need to ensure a line constraint in a responsive design?

    $('.title').truncate();
    $(window).resize(function(){
        $('.title').truncate();
    });

