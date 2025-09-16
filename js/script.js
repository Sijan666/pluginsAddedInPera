
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// --------------

var mixer = mixitup(".projectFile");

// -----------------

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// -----------------

AOS.init();

// -----------------

//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 700){
        $('.backToTop').fadeIn(200)
    } else{
        $('.backToTop').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.backToTop').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});

// ========================