/* 
    Для роителя спойлеров пишем атрибут data-spollers
    для заголовков спойлеров пишем атрибут data-spoller
    Если нужно включать\выкючать работу спойлеров на разных размерах экранов
    пишем параметры ширины и типа брейкпоинтов.
    Например:
    data-spollers = "992,max" - спойлеры будут работать только на экранах меньше или равно 992px
    data-spollers = "768,min" - спойлеры будут работать только на экранах больше или равно 768px

    Если нужно что бы в блоке открывался один спойлер добавляем атрибут data-one-spoller
 */

const spoller = () => {
    const spollersArray = document.querySelectorAll('[data-spollers]');

    // Строим спойлеры
    const bildSpollers = (spoller) => {
        const titles = spoller.querySelectorAll('[data-spoller]');

        spoller.classList.add('spollers');

        for (const item of spoller.children) {
            item.classList.add('spollers__item');
        }

        for (const title of titles) {
            title.classList.add('spollers__title');
            title.nextElementSibling.classList.add('spollers__body');
        }
    };

    if (spollersArray.length > 0) {
        // Присваем спойлеру классы
        spollersArray.forEach(spoller => {
            bildSpollers(spoller);
        });

        // Получаем масив обычных слайдеров
        const spollerRegular = Array.from(spollersArray).filter(function (item, i, self) {
            return !item.dataset.spollers.split(",")[0];
        });

        // Получение спойлеров с медиа запросами
        const spollersMedia = Array.from(spollersArray).filter(function (item, i, self) {
            return item.dataset.spollers.split(",")[0];
        });

        // Инициализация обычных слайдеров
        if (spollerRegular.length > 0) {
            initSpollers(spollerRegular);
        }

        // Инициализация спойлеров с медиа запросоми
        if (spollersMedia.length > 0) {
            const breakpointsArray = [];

            spollersMedia.forEach(item => {
                const params = item.dataset.spollers;
                const breakpoint = {};
                const paramsArray = params.split(',');

                breakpoint.value = paramsArray[0];
                breakpoint.type = paramsArray[1] ? paramsArray[1] : "max";
                breakpoint.item = item;
                breakpointsArray.push(breakpoint);
            });

            // Получаем уникальные брейкпоинты
            let mediaQueries = breakpointsArray.map(function (item) {
                return `(${item.type}-width: ${item.value}px),${item.value},${item.type}`;
            });
            mediaQueries = mediaQueries.filter(function (item, i, self) {
                return self.indexOf(item) === i;
            });

            // Работаем с каждым брейкпоинтом
            mediaQueries.forEach(breakpoint => {
                const paramsArray = breakpoint.split(',');
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);

                // Объекты с нужным условием
                const spollersArray = breakpointsArray.filter(function (item) {
                    if (item.value === mediaBreakpoint && item.type === mediaType) {
                        return true;
                    }
                });

                // Событие 
                matchMedia.addListener(function () {
                    initSpollers(spollersArray, matchMedia);
                });

                initSpollers(spollersArray, matchMedia);
            });
        }

        // Инициализация
        function initSpollers(spollersArray, matchMedia = false) {
            spollersArray.forEach(spollersBlock => {
                spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;

                if (matchMedia.matches || !matchMedia) {
                    spollersBlock.classList.add('_spoller-init');
                    initSpollerBody(spollersBlock);
                    spollersBlock.addEventListener("click", setSpollerAction);
                } else {
                    spollersBlock.classList.remove('_spoller-init');
                    initSpollerBody(spollersBlock, false);
                    spollersBlock.removeEventListener("click", setSpollerAction);
                }
            });
        }

        // Работа с контентом
        function initSpollerBody(spollersBlock, hideSpollerBody = true) {
            const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
            if (spollerTitles.length > 0) {
                spollerTitles.forEach(spollerTitle => {
                    if (hideSpollerBody) {
                        spollerTitle.removeAttribute('tabindex');
                        if (!spollerTitle.classList.contains('_spoller-active')) {
                            spollerTitle.nextElementSibling.hidden = true;
                        }
                    } else {
                        spollerTitle.setAttribute('tabindex', '-1');
                        spollerTitle.nextElementSibling.hidden = false;
                    }
                });
            }
        }

        function setSpollerAction(e) {
            const el = e.target;

            if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
                const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
                const spollersBlock = spollerTitle.closest('[data-spollers]');
                const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;

                if (!spollersBlock.querySelectorAll('._slide').length) {
                    if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
                        hideSpollersBody(spollersBlock);
                    }
                    spollerTitle.classList.toggle('_spoller-active');
                    _slideToggle(spollerTitle.nextElementSibling, 500);
                }
                e.preventDefault();
            }
        }

        function hideSpollersBody(spollersBlock) {
            const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
            if (spollerActiveTitle) {
                spollerActiveTitle.classList.remove('_spoller-active');
                _slideUp(spollerActiveTitle.nextElementSibling, 500);
            }
        }

    }


    // ==========================================================================================================
    //SlideToggle
    let _slideUp = (target, duration = 500) => {
        if (!target.classList.contains('_slide')) {
            target.classList.add('_slide');
            target.style.transitionProperty = 'height, margin, padding';
            target.style.transitionDuration = duration + 'ms';
            target.style.height = target.offsetHeight + 'px';
            target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = 0;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(() => {
                target.hidden = true;
                target.style.removeProperty('height');
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
                target.classList.remove('_slide');
            }, duration);
        }
    };

    let _slideDown = (target, duration = 500) => {
        if (!target.classList.contains('_slide')) {
            target.classList.add('_slide');
            if (target.hidden) {
                target.hidden = false;
            }

            let height = target.offsetHeight;

            target.style.overflow = 'hidden';
            target.style.height = 0;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = 'height, margin, padding';
            target.style.transitionDuration = duration + 'ms';
            target.style.height = height + 'px';
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            window.setTimeout(() => {
                target.style.removeProperty('height');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
                target.classList.remove('_slide');
            }, duration);


        }
    };

    let _slideToggle = (target, duration = 500) => {
        if (target.hidden) {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    };

};


// const spoller = () => {
//     const btn = document.querySelector('.phones-header__arrow');
//     const list = document.querySelector('.phones-header__list');
//     const activeClass = '--active';
//     const transition = 'all .6s ease-in-out';

//     btn.addEventListener('click', function (e) {
//         e.preventDefault();

//         if (!this.classList.contains(activeClass)) {
//             this.classList.add(activeClass);
//             list.style.cssText = `
//                 display: block;
//             `;
//         } else {
//             this.classList.remove(activeClass);
//             list.style.cssText = `
//                 display: '';
//             `;
//         }
//     });
// };

export default spoller;