// SCROLLMAGIC
$(document).ready(function () {

    let controller = new ScrollMagic.Controller();
    let scene1 = new ScrollMagic.Scene({
        triggerElement: '#welcome-title', 
        triggerHook: 0.8
    })
    .setClassToggle('#welcome-title', 'scroll-1')
    .reverse(true)
    .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '#welcome-title', 
        triggerHook: 0.6
    })
    .setClassToggle('#scroll-2', 'scroll-2')
    .reverse(true)
    .addTo(controller);

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '#scroll-3', 
        triggerHook: 0.7
    })
    .setClassToggle('#scroll-3', 'scroll-3')
    .reverse(true)
    .addTo(controller);

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '#scroll-4', 
        triggerHook: 0.7
    })
    .setClassToggle('#scroll-4', 'scroll-4')
    .reverse(true)
    .addTo(controller);

    let scene5 = new ScrollMagic.Scene({
        triggerElement: '#scroll-5', 
        triggerHook: 1.2
    })
    .setClassToggle('#scroll-5', 'scroll-5')
    .reverse(true)
    .addTo(controller);

    let scene6 = new ScrollMagic.Scene({
        triggerElement: '#scroll-6', 
        triggerHook: 0.7
    })
    .setClassToggle('#scroll-6', 'scroll-6')
    .reverse(true)
    .addTo(controller);

    let scene7 = new ScrollMagic.Scene({
        triggerElement: '#scroll-7', 
        triggerHook: 0.7
    })
    .setClassToggle('#scroll-7', 'scroll-7')
    .reverse(true)
    .addTo(controller);

    let scene8 = new ScrollMagic.Scene({
        triggerElement: '#about-us', 
        triggerHook: 0.9
    })
    .setClassToggle('#about-us', 'scroll-8')
    .reverse(true)
    .addTo(controller);

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


