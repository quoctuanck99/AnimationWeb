class MyAnimation {
    ///////////////////////////////////////////FADE IN APPEAR////////////////////////////////////////////
    appear(obj, time) {
        return anime({
            targets: obj,
            opacity: [{ value: 1, duration: time }],
            easing: 'easeInOutQuad',
        });
    }

    disappear(obj) {
            return anime({
                targets: obj,
                opacity: 0,
                autoplay: false,
            });
        }
        ///////////////////////////////////////////FADE UP////////////////////////////////////////////////
    fadeup(obj, time, value) {
        return anime({
            targets: obj,
            translateY: [{ value: value, duration: time }],
            opacity: [{ value: 1, duration: time }],
            easing: 'easeInOutQuad',
        });
    }

    returnY(obj, value) {
            return anime({
                targets: obj,
                translateY: value,
                opacity: 0
            });
        }
        ///////////////////////////////////////////ROTATE APPEAR////////////////////////////////////////////////
    rotateAppear(obj, time) {
            objects = anime({
                targets: obj,
                opacity: [{ value: 1, duration: time }],
                easing: 'easeInOutQuad',
                rotate: '1turn'
            });
            objects.play();
        }
        ///////////////////////////////////////////toleft delay///////////////////////////////////////
    toXDelay(obj, time, value) {
        return anime({
            targets: obj,
            delay: time,
            opacity: [{ value: 1, duration: time }],
            translateX: value,
        })
    }

    returnX(obj, value) {
        return anime({
            targets: obj,
            translateX: value,
            opacity: 0
        });
    }

    fadeShowUp(def) {
        return anime({
            targets: def,
            opacity: [{ value: 1, duration: 1000 }],
            easing: 'easeInOutQuad',
        });
    }

    off(def) {
        return nh = anime({
            targets: def,
            opacity: 0,
        });
    }

    appearDelay(obj, duration, delay) {
        objects = anime({
            targets: obj,
            opacity: [{ value: 1, duration: duration }],
            easing: 'easeInOutQuad',
            delay: delay
        });
        objects.play();
    }
}