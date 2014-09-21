//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").removeClass("top-nav-fat").addClass("top-nav-slim");
    } else {
        $(".navbar-fixed-top").addClass("top-nav-fat").removeClass("top-nav-slim");
    }
});


jQuery(document).ready(function($) {


    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

    $('#main-navigation .navbar-nav a, #main-navigation .navbar-brand').on('click', function(e) {
        e.preventDefault();

        var link = $(this);

        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top
        }, 800, 'easeInOutExpo');

        if ($('.navbar-collapse').hasClass('in')){
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });


    $("#scroll-to-portfolio").on("click", function(e) {
        e.preventDefault();
        var link = $(this);

        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
    });


});
