$(document).ready(function(){
    $('.set-bg').each(function(){
        let bg = $(this).data('setbg');
        $(this).css(
            'background-image', 'url(' + bg + ')'
        )
    })

    $('.toggle').click(function(){
        $('ul').slideToggle();
    })

    $(window).resize(function(){
        if ($(window).width() > 768) {
            $('ul').removeAttr("style");
        }
    });

    new WOW().init();
})