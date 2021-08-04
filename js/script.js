$(document).ready(function() {


    $('#slides').slideshow({
        slideDuration: 2000,
        fadeDuration: 1000
    });

    $(window).scroll(function() {
    
        if($(window).scrollTop() > 200) {
            $('.navbar .navbar-brand img').attr('src', 'imgs/logo-black.png')
            $('.navbar').fadeIn(100).addClass('fixed-navbar')
            $('.navbar').removeClass('navbar-dark').addClass("navbar-light")
            


    
        }else {
            $('.navbar').removeClass('fixed-navbar')
            $('.navbar .navbar-brand img').attr('src', 'imgs/logo-white.png')
            $('.navbar').removeClass('navbar-light').addClass("navbar-dark")
            
            
        }
    })



    $("*#interior-link").click(function(e) {
        e.preventDefault();

        console.log(true)
        $("html, body").animate({
            scrollTop: $('#'+ $(this).data('link')).offset().top - 70
        }, 1000);

        $(this).parent().addClass('active').siblings().removeClass("active");
    })

    $(window).scroll(function() {

            
        $('section, header').each(function() {

            if($(window).scrollTop()  > ($(this).offset().top - 120)) {

                var item_id = $(this).attr("id");
                $('.main-header .navbar .nav-link[data-link='+ item_id+']').parent().addClass('active').siblings().removeClass('active')
            }
        })

    })


    
    $('.main-header .navbar-toggler').click(function() {
        if(!$('.navbar-collapse').hasClass('show')) {
            $('.navbar').css('height', 'initial')
        }
    })
  

    AOS.init();


    $(function() {
        $('.products .owl-carousel').owlCarousel({
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                680: {
                    items: 3
                },
                960: {
                    items: 5
                }
            },
            nav: true,
            dots: true,
            
        })
        
    })


    $('.main-header .header-content').css('padding-top', (($(window).height() + $('.main-header .header-content').height()) / 2) - ($('.navbar').height() + ($(window).height() /2 ) ))




    $('.main-header .to-bottom').click(function() {
        $('html, body').animate({
            scrollTop: $('#detailing-overview').offset().top - $('.navbar').height()
        }, 1000)
    })




    // start contact form 
    $('.contact .form .form-group input').focus(function() {

        $(this).addClass('focus');
    
    });
    
    $('.contact .form .form-group input').blur(function() {
    
        if($(this).val() === '') {
    
            $(this).removeClass('focus');
    
        }
                    
    });
    // end contact form 



    $(".testimonials .owl-carousel").owlCarousel({
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            680: {
                items: 2
            },
            960: {
                items: 3
            }
        },
        dots: true
    })
    

})