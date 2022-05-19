const menuBurger = () => {

    const menuBtn = document.querySelector('.icon-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Добавление отступа справа для body
            setPaddingRight();
            toogleBtn();
        });
    }

    function toogleBtn() {
        document.documentElement.classList.toggle('menu-open');
        menuBtn.classList.toggle('menu-open');
    }

    // Функция вычисляющая ширину скрола
    function calcScroll() {
        const body = document.querySelector('body');
        const element = document.createElement('div');
        element.style.width = '50px';
        element.style.height = '50px';
        element.style.overflowY = 'scroll';
        element.style.visibility = 'hidden';
        body.insertAdjacentElement('beforeend', element);

        let scrollWidth = element.offsetWidth - element.clientWidth;
        element.remove();

        return scrollWidth;
    }

    function setPaddingRight() {
        if (!document.body.style.paddingRight) {
            document.body.style.paddingRight = calcScroll() + 'px';
            document.querySelector('.header').style.paddingRight = calcScroll() + 'px';
        } else {
            document.body.style.paddingRight = '';
            document.querySelector('.header').style.paddingRight = "";
        }
    }

};

export default menuBurger;