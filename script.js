// Navbar

    $(window).scroll(function () { 
        if($(document).scrollTop() > 80){
            $('.custom-color-1').removeAttr('id','none')
            $('.custom-color-2').removeAttr('id','none')
            $('.custom-color-3').removeAttr('id','none')
            $('.custom-color-4').removeAttr('id','none')
            $('.nav-target').addClass('fixed-top navbar-light bg-light');
        }
        else{
            $('.custom-color-1').attr('id','custom-color')
            $('.custom-color-2').attr('id','custom-color')
            $('.custom-color-3').attr('id','custom-color')
            $('.custom-color-4').attr('id','custom-color')
            $('.nav-target').removeClass('fixed-top navbar-light bg-light')
        }
    });

    // OWL 
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    slideTransition: 'linear',
    margin:10,
    nav:true,
    responsive:{
        300:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:2
        },
        770:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
})


