$(document).ready(function() {

    $('.show-popup').click(function(e) {
        e.preventDefault();
        $('#'+ $(this).data("show") + ", .popup-bg").fadeIn(100)
    })

    $('.popup .close').click(function() {
        $('.popup-bg, .popup').fadeOut(100)
    })

    
    $('.side-nav-toggler').click(function() {
        $('.side-nav').slideToggle()
    })



    if($(window).width() <= 900) {
        $('table').addClass('table-responsive')
    }

})

