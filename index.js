$(window).scroll(function (){
    $('.about-img img').each(function(){
                var elemPos = $('.about-img img').offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $('.about-img img').addClass('scrollin');
        }
    });
});