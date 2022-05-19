
// Подключение дополнительных модулей Swiper поизводиться в {} через запятую.
// Пример: { Navigation, Pagination }.
// Модули: Autoplay, Lazy, Manipulation, Navigation, Pagination, Parallax, Thumbs
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const slider = () => {

    // Добавить классы слайдерам
    // swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
    const bildSliders = () => {
        let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
        if (sliders) {
            sliders.forEach(slider => {
                slider.parentElement.classList.add('swiper');
                slider.classList.add('swiper-wrapper');
                for (const slide of slider.children) {
                    slide.classList.add('swiper-slide');
                }
            });
        }
    };

    // Инициализация слайдера
    const initSliders = () => {
        // Добавления классов слайдера
        // при необходимости отключить4
        bildSliders();

        // Перечень слайдеров
        if (document.querySelector('.slider-team')) {
            new Swiper('.slider-team', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                observer: true,
                observeParents: true,
                slidesPerView: 4,
                spaceBetween: 30,
                // parallax: true,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                // pagination: {
                //     el: '.controll-main-block__dots',
                //     clickable: true,
                // },

                // Arrows
                navigation: {
                    nextEl: '.slider-team__slider-button-next',
                    prevEl: '.slider-team__slider-button-prev'
                },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                // Breakpointers
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                        autoHeight: true,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                },
                on: {
                }
            });
        }

        if (document.querySelector('.slider-testimonials')) {
            new Swiper('.slider-testimonials', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 10,
                // parallax: true,
                autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },

                // Arrows
                navigation: {
                    nextEl: '.slider-testimonials__slider-button-next',
                    prevEl: '.slider-testimonials__slider-button-prev'
                },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },
                on: {
                }
            });
        }

        if (document.querySelector('.slider-carousel--col2')) {
            new Swiper('.slider-carousel--col2', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay],
                /* 
                effect: 'fade',
                */
                // autoplay: {
                //     dealay: 3000,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true
                // },
                observer: true,
                observeParents: true,
                slidesPerView: 2,
                spaceBetween: 10,
                // parallax: true,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                // pagination: {
                //     el: '.controll-main-block__dots',
                //     clickable: true,
                // },

                // Arrows
                navigation: {
                    nextEl: '.slider-carousel__slider-button-next',
                    prevEl: '.slider-carousel__slider-button-prev'
                },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                // Breakpointers
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        // autoHeight: true,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                },
                on: {
                }
            });
        }

        if (document.querySelector('.slider-carousel--col3')) {
            new Swiper('.slider-carousel--col3', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 10,
                // parallax: true,
                autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                // loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                // pagination: {
                //     el: '.controll-main-block__dots',
                //     clickable: true,
                // },

                // Arrows
                navigation: {
                    nextEl: '.slider-carousel__slider-button-next',
                    prevEl: '.slider-carousel__slider-button-prev'
                },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                // Breakpointers
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        // autoHeight: true,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
                on: {
                }
            });
        }

    };


    window.addEventListener("load", function (e) {
        // Запуск инициализации слайдера
        initSliders();
    });



};

export default slider;