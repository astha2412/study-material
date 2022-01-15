// scroll to top starts
var scrolltop = $('#scroll-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 80) {
        scrolltop.addClass('active');
    } else {
        scrolltop.removeClass('active');
    }
});
    
scrolltop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
});
// scroll to top ends


