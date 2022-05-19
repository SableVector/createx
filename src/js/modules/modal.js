const modal = () => {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const modals = document.querySelectorAll('[data-modal]');
    const modalOpenBtns = document.querySelectorAll('[data-modal-open]');


    if (modals.length > 0) {
        modals.forEach(modal => {
            hideModal(modal);

            modal.addEventListener('click', e => {
                const target = e.target;

                if (target && !target.closest('.popup-body') || target.closest('.popup-body__close')) {
                    hideModal(modal);
                }
            });
        });
    }

    if (modalOpenBtns.length > 0) {
        modalOpenBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                const modalBtn = btn.dataset.modalOpen;
                let scrollWidth = calcScroll();

                modals.forEach(modal => {
                    const modalName = modal.dataset.modal;

                    if (modal.style.display === 'none' && modalName === modalBtn) {
                        showModal(modal, scrollWidth);
                    }
                });
            });
        });
    }


    document.addEventListener('keydown', (event) => {
        const keyName = event.key;

        if (keyName === 'Escape' && document.documentElement.classList.contains('modal-open')) {
            modals.forEach(modal => {
                hideModal(modal);
            });
        }
    });

    function hideModal(modal) {
        modal.classList.remove('popup--active');
        modal.classList.add('popup--not-active');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('popup--not-active');
        }, 600);
        body.parentElement.classList.remove('modal-open');
        body.style.paddingRight = ``;
        header.style.paddingRight = ``;
    }

    function showModal(modal, scroll) {
        modal.classList.add('popup--active');
        modal.style.display = 'block';
        body.parentElement.classList.add('modal-open');
        body.style.paddingRight = `${scroll}px`;
        header.style.paddingRight = `${scroll}px`;
    }

    // Функция вычисляющая ширину скрола
    function calcScroll() {
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
};

export default modal;
