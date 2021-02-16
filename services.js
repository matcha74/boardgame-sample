    /* フェードイン：サービス*/
    $(window).scroll(function (){
      $('.services-contents-title').each(function(){
                  var elemPos = $('.services-contents-title').offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
          $('.services-contents-title').removeClass('scrollin');
            $('.services-contents-title').addClass('scrollin');
          } 
      });
      $('.services-contents-text').each(function(){
                  var elemPos = $('.services-contents-text').offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
          $('.services-contents-text').removeClass('scrollin');
            $('.services-contents-text').addClass('scrollin');
          }
      });
  });