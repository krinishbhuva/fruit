$(document).ready(function(){

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
        
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });


     $('#testimonial').owlCarousel({
          loop:true,
          margin:30,
          nav:false,
          dots:false,
          autoplay:true,
          autoplayTimeout:2000,
        
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              700:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })


     $('#logo').owlCarousel({
          loop:true,
          margin:30,
          nav:false,
          dots:false,
          autoplay:true,
          autoplayTimeout:2000,
        
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              700:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
      })


    
});