import WOW from 'wow.js';

const wowAnimation = () => {
    const animationItems = document.querySelectorAll('[data-animation]');

    function addClass(array) {
        array.forEach(item => {
            const animationName = item.dataset.animation;
            item.classList.add('wow', `animate__${animationName}`);
        });
    }

    const wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 25,          // default
            mobile: true,       // default
            live: true        // default
        }
    );

    addClass(animationItems);
    wow.init();

};

export default wowAnimation;