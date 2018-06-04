// $(document).ready(function(){
//    alert('hi');
// });
function stickyHeader(){
    var $header = $('.header_s');
    if( $(window).scrollTop() >=100 ){
        $header.addClass('header_s--a');
    }else{
        $header.removeClass('header_s--a');
    }
}

$(window).on('scroll', function(){
    stickyHeader();
});

$(document).ready(function(){
    var owlMain = $('.main-slider'),
        owlTwo = $('.second-slider'),
        owlThree = $('.partners_s__slider');
    owlTwo.owlCarousel({
        items:3,
        loop: true,
        nav:false,
        dots:false,
        margin:30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        dragEndSpeed: 2000
    });
    $('.second_slider_next').click(function(){
        owlTwo.trigger("next.owl.carousel");
    });
    $('.second_slider_prev').click(function(){
        owlTwo.trigger("prev.owl.carousel");
    });
    owlThree.owlCarousel({
        items:4,
        loop: true,
        nav:false,
        dots:false,
        margin:90,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        dragEndSpeed: 2000
    })
});