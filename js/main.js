(function ($) {
    "use strict";



    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });




    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1500
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 5000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });



})(jQuery);