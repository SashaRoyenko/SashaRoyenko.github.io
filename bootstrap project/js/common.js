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
})