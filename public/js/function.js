console.log('Like what you see? Contact me @ bunth667@gmail.com or 954.707.9653');

$(function() {
    
    const start = $('ul').offset().top;
    const bio = $('#bio').offset().top;
    const skills = $('#skills').offset().top;
    const portfolio = $('#portfolio').offset().top;
    const contact = $('#contact').offset().top;

    $(window).scroll(function() {
        
        const navbar = $('.navbar');
        let scrollPos = $(window).scrollTop();

        if(scrollPos >= start) {
            navbar.addClass('fixed');
        } else {
            navbar.removeClass('fixed');
        }

        if(scrollPos < skills) {
            $('.navbar ul li').removeClass('active');
            $('.navbar-item1').addClass('active');
        } else if(scrollPos >= skills && scrollPos < portfolio) {
            $('.navbar ul li').removeClass('active');
            $('.navbar-item2').addClass('active');
        } else if(scrollPos >= portfolio && scrollPos < contact) {
            $('.navbar ul li').removeClass('active');
            $('.navbar-item3').addClass('active');
        } else {
            $('.navbar ul li').removeClass('active');
            $('.navbar-item4').addClass('active');
        }
    });

    $('.navbar ul li').on('click', function() {
        $('.navbar ul li').removeClass('active');
        $(this).toggleClass('active');
    });
    
});
