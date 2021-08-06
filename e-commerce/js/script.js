$(document).ready(function() {







    // start login registration functions
    $(function() {
        $('.login span.toggle-password i#show, .registration span.toggle-password i#show').click(function() {
            $(this).parentsUntil(".form-group").siblings('input').attr('type', 'text')
            $(this).hide().addClass('d-none');
            $(this).siblings("i#hide").show().removeClass('d-none')
        })
        $('.login span.toggle-password i#hide, .registration span.toggle-password i#hide').click(function() {
            $(this).parentsUntil(".form-group").siblings('input').attr('type', 'password')
            $(this).hide().addClass('d-none');
            $(this).siblings("i#show").show().removeClass('d-none')

        })
    })

    if($(window).width() <= 770) {
        var block = $('.login .col-md-6:first-child').clone();
        $('.login .col-md-6:first-child').remove()
        $('.login .row').append(block)

    }
    $(window).resize(function() {
        if($(window).width() <= 770) {
            var block = $('.login .col-md-6:first-child').clone();
            $('.login .col-md-6:first-child').remove()
            $('.login .row').append(block)
    
        }
    })

    // end login registration functions





    // start categories functions 
    $('.categories-toggler i').click(function() {
        $('header .sm-menu-categories').toggle(200)
        $(this).toggleClass('fa-times') // to change the icon of the menu categories on mobile version when we click on it
        
    })
    $('.menu-categories li.sub-menu-toggler a').click(function(event) {
        event.preventDefault(); // for all the categories that have subcategories ( bech maydirech reload lel page when we click on it, even if we clicked he'll show the subcategories related to it ) 
    })


    $('.sm-menu-categories li a.sub-menu-toggler').click(function() {
        $(this).next().slideToggle() // menu categories of the mobile version
    })

    $('.sm-menu-categories .sm-sub-menu-block .subcat-heading').click(function() {
        $(this).next().slideToggle() // subcat menu categories of the mobile version
    })
    // end categories functions 
    

    
   


    // start functions of displaying products 
    $('.products-list .owl-carousel').owlCarousel({
        responsiveClass: true,
        responsive: {
            0 :{
                items: 1
            },
            370: {
                items: 2
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
        margin: 10,
        loop: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true

    })

    $('.products-list .product .product-img').hover(function() {
        if($(this).find('.second-img').length > 0) { // check if the product has at least two images
            $(this).find('img').first().toggle(250) // hide the first image (toggled)
            $(this).find('.second-img').fadeToggle(250) // show the second image (toggled)
        }
        
    })
    // end functions of displaying products 









    var lastScrollTop = 0;
    $(window).scroll(function() {

        var st = $(this).scrollTop();

        if($(window).scrollTop() > 50) {
            if (st > lastScrollTop){
                $('header').removeClass('fixed-header')
                $('header').css('display', 'none')
            } else {
                $('header').fadeIn(300).addClass('fixed-header')
                $('header').css('display', 'block')
            }
            lastScrollTop = st;

        } else {
            $('header').removeClass('fixed-header')

        }

   
    })




})


