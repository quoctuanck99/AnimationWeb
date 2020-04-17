$(document).ready(function() {
    var path = anime.path('#airplane-svg path');

    class AnimationPage01 {
        // animation showup of desk 1
        zoomEffectValue = 0.5
        desk1Animation = anime({
                targets: document.querySelectorAll("#desk-1"),
                translateY: [{ value: 410, duration: 1500 }],
                opacity: [{ value: 1, duration: 1500 }],
                // translateX: [{value:250,duration:2000},{value:0,duration:1000}],
                easing: 'easeInOutQuad',
            })
            //
            // desk1ZoomAnimation = anime({
            //     targets: document.querySelectorAll("#desk-1"),
            //     scaleX: [{value:1}],
            //     scaleY: [{value:1}],
            //     loop:true,
            //     // translateX: [{value:250,duration:2000},{value:0,duration:1000}],
            //     easing: 'easeInOutQuad',
            // });
            // animation back to initial place of desk 1
        desk1AnimationBack = anime({
            targets: document.querySelectorAll("#desk-1"),
            translateY: [{ value: -410, duration: 0 }],
        });
        // animation showup of desk 2
        desk2Animation = anime({
            targets: document.querySelectorAll("#desk-2"),
            translateY: [{ value: -280, duration: 1500 }],
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        // animation back to initial place of desk 2
        desk2AnimationBack = anime({
            targets: document.querySelectorAll("#desk-2"),
            translateY: [{ value: 280, duration: 0 }],
            autoplay: false,
        });
        //  animation back to initial place of desk 3
        desk3Animation = anime({
            targets: document.querySelectorAll("#desk-3"),
            translateX: [{ value: -400, duration: 1500 }],
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        //
        desk3AnimationBack = anime({
            targets: document.querySelectorAll("#desk-3"),
            translateY: [{ value: 400, duration: 0 }],
            autoplay: false,
        });
        // animation back to initial place of desk 4
        desk4Animation = anime({
            targets: document.querySelectorAll("#desk-4"),
            translateY: [{ value: -200, duration: 1500 }],
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        //
        desk4AnimationBack = anime({
            targets: document.querySelectorAll("#desk-4"),
            translateY: [{ value: 200, duration: 0 }],
            autoplay: false,
        });
        // animation back to initial place of person 1
        person1AnimationBack = anime({
            targets: document.querySelectorAll("#person-1"),
            translateY: [{ value: -250, duration: 0 }],
            translateX: [{ value: -155, duration: 0 }],
            opacity: 0,
            autoplay: false,
        });
        //   
        person1Animation = anime({
            targets: document.querySelectorAll("#person-1"),
            translateY: [{ value: 250, duration: 1500 }],
            translateX: [{ value: 155, duration: 1500 }],
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        // animation back to initial place of floor
        floorAnimationBack = anime({
            targets: document.querySelectorAll("#floor"),
            opacity: 0,
            autoplay: false,
        });
        //   
        floorAnimation = anime({
            targets: document.querySelectorAll("#floor"),
            opacity: [{
                value: 1,
                duration: 1500
            }],
            easing: 'easeInOutQuad',
        });
        // animation back to initial place of way
        wayAnimationBack = anime({
            targets: document.querySelectorAll("#way"),
            opacity: 0,
            autoplay: false,
        });
        //   
        wayAnimation = anime({
            targets: document.querySelectorAll("#way"),
            opacity: [{
                value: 1,
                duration: 1500
            }],
            easing: 'easeInOutQuad',
        });
        // animation back to initial place of person 1
        person1AnimationBack = anime({
            targets: document.querySelectorAll("#person-1"),
            translateY: [{ value: -250, duration: 0 }],
            translateX: [{ value: -155, duration: 0 }],
            opacity: 0,
            autoplay: false,
        });
        //   
        person1Animation = anime({
            targets: document.querySelectorAll("#person-1"),
            translateY: [{ value: 250, duration: 1500 }],
            translateX: [{ value: 155, duration: 1500 }],
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        // animation back to initial place of person 2
        person2AnimationBack = anime({
            targets: document.querySelectorAll("#person-2"),
            translateY: [{ value: 200, duration: 0 }],
            translateX: [{ value: 105, duration: 0 }],
            opacity: 0,
            autoplay: false,
        });
        //   
        person2Animation = anime({
            targets: document.querySelectorAll("#person-2"),
            translateY: [{ value: -200, duration: 1500 }],
            translateX: [{ value: -100, duration: 1500 }],
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        //
        // animation back to initial place of person 2
        carAnimationBack = anime({
            targets: document.querySelectorAll("#cars"),
            translateX: [{ value: -200, duration: 0 }],
            opacity: 0,
            autoplay: false,
        });
        //   
        carAnimation = anime({
            targets: document.querySelectorAll("#cars"),
            translateX: [{ value: 200, duration: 3000 }],
            opacity: [{ value: 1, duration: 3000 }],
            easing: 'easeInOutQuad',
            rotate: {
                value: '3turn',
                easing: 'easeInOutSine',
                delay: 2000
            }
        });
        //
        //   
        person1Animation = anime({
            targets: document.querySelectorAll("#person-1"),
            translateY: [{ value: 250, duration: 1500 }],
            translateX: [{ value: 155, duration: 1500 }],
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        // animation back to initial place of person 2
        person2AnimationBack = anime({
            targets: document.querySelectorAll("#person-2"),
            translateY: [{ value: 200, duration: 0 }],
            translateX: [{ value: 105, duration: 0 }],
            opacity: 0,
            autoplay: false,
        });
        // 
        person3Animation = anime({
            targets: document.querySelectorAll("#person-3"),
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        // animation back to initial place of person 2
        person3AnimationBack = anime({
            targets: document.querySelectorAll("#person-3"),
            opacity: 0,
            autoplay: false,
        });
        // 
        person4Animation = anime({
            targets: document.querySelectorAll("#person-4"),
            opacity: [{ value: 1, duration: 1500 }],
            easing: 'easeInOutQuad',
        });
        // animation back to initial place of person 2
        person4AnimationBack = anime({
            targets: document.querySelectorAll("#person-4"),
            opacity: 0,
            autoplay: false,
        });
        // 
        textAnimation = anime({
            targets: document.querySelectorAll("#big-slogan"),
            opacity: [{ value: 1, duration: 3600 }],
            easing: 'easeInOutQuad',
        });

        // animation back to initial place of person 2
        textAnimationBack = anime({
            targets: document.querySelectorAll("#big-slogan"),
            opacity: 0,
            autoplay: false,
        });

        airplaneAnimation = anime({
            targets: '#page1 #air-plane',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            // autoplay: false
        });

        airplaneAnimationBack = anime({
            targets: '#page1 #air-plane',
            translateX: 0,
            translateY: 0,
            rotate: 0,
            duration: 0,
            autoplay: false
        });
    }
    var animationP1 = new AnimationPage01();
    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 0) {
            animationP1.airplaneAnimation.restart()
            animationP1.desk1Animation.play()
            animationP1.desk2Animation.play()
            animationP1.desk3Animation.play()
            animationP1.desk4Animation.play()
            animationP1.person1Animation.play()
            animationP1.wayAnimation.play()
            animationP1.floorAnimation.play()
            animationP1.person2Animation.play()
            animationP1.carAnimation.play()
            animationP1.person3Animation.play()
            animationP1.person4Animation.play()
            animationP1.textAnimation.play()
        } else {
            animationP1.desk1AnimationBack.play()
            animationP1.desk2AnimationBack.play()
            animationP1.desk3AnimationBack.play()
            animationP1.desk4AnimationBack.play()
            animationP1.person1AnimationBack.play()
            animationP1.wayAnimationBack.play()
            animationP1.floorAnimationBack.play()
            animationP1.person2AnimationBack.play()
            animationP1.carAnimationBack.play()
            animationP1.person3AnimationBack.play()
            animationP1.person4AnimationBack.play()
            animationP1.textAnimationBack.play()
            animationP1.airplaneAnimation.pause()
            animationP1.airplaneAnimationBack.play()
        }
    });
})