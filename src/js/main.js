import * as funct from "./modules/functions.js";

window.addEventListener('DOMContentLoaded', () => {
	// Проверка на поддержку Webp формата изображения браузером и присвоение HTML-тегу класса webp или no-webp
	funct.isWebp();

	// Подключение плагина Swiper и настройка выполняються в файле js/libs/slider.js
	// Для установки плагина в терминале прописать npm install swiper;
	// Документация слайдера: https://swiperjs.com/
	// Сниппет(HTML): swiper
	// Подключенние слайдера Swiper выполняеться из node_modeles
	funct.swiper();

	// Подключение плагина Tippy.js и настройка выполняються в файле js/libs/tippy.js
	// Документация плагина: https://github.com/atomiks/tippyjs
	// Для установки плагина в терминале прописать npm i tippy.js;
	// Для начала работы плагина, нужно прописать data- атрибут нужному HTML-тегу: data-tippy-content="Подсказка №1"
	// Снипет(html): tip(добавляет атрибут с подсказкой для htmk тега);
	// Подключенние слайдера Tippy выполняеться из node_modeles
	// funct.tippy();

	// Подключение Спойлера ===========================================================
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
	funct.spoller();

	// Подключение Динамического адаптива =============================================
	// funct.dynamicAdapt();

	// Подключение Бургер меню =======================================================
	funct.menuBurger();

	// Подключение Звездного рейтинга ================================================
	// funct.ratingStar();

	// Подключение кастомного Select ================================================
	// funct.select();

	// Подключение кастомного Табов ================================================
	funct.tabs();

	// Подключение Таймера на странице ================================================
	funct.timer();

	// Подключение Валидации форм на странице ================================================
	/* 
	Подключение и настройка выполняеться в файле js/modules/forms.js
	для Валидации формы нужно добавить дата атрибут самой форме data-form
	для интпутов которые требуються для обезательного заполнение добавляем дата атрибут data-req
	Снипет (html): form(в разработке) 
	*/
	funct.forms();

	// Подключение Модальных окон на странице ================================================
	/* 
	Подключение и настройка выполняеться в файле js/modules/modal.js
	Снипет (html): popup(в разработке) 
	*/
	funct.modal();


	// Подключение модуля плавного скролла до объекта =============================================
	// Для начала работы плагина, нужно прописать data- атрибут нужному HTML-тегу кнопки: data-smooth.
	funct.smoothScrolling();

	// Подключение ползунка ================================================
	/* 
	Подключение и настройка выполняеться в файле js/libs/range.js
	Документация в шаблое
	Документация плагина: https://refreshless.com/nouislider/
	Снипет (html): range(в разработке)
	 */
	// funct.rangeInit();

	// Наблюдатель за объектами c атрибутом data-watch
	// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
	// Сниппет(HTML):
	// funct.watcher();

	// WOW - анимация
	// для Для подключения анимации нужно добавить дата атрибут самой форме data-anim
	// Документация: https://https://wowjs.uk/docs.html, https://animate.style;
	// funct.animation();

	// Сниппет(HTML):
	funct.watcher();

	// ===================================================================================================================================

	const filterBtns = document.querySelectorAll('.filter-buttons__button');
	const contentEventsList = document.querySelector('.content-events__list');

	if (filterBtns && contentEventsList) {

		filterBtns.forEach((btn, i) => {

			btn.addEventListener('click', () => {
				const direction = filterBtns[i].getAttribute('data-direction');

				removeFilterClass();
				addFilterClass(filterBtns, i);

				if (direction === 'row') {
					contentEventsList.classList.remove('content-events__list--col');
					contentEventsList.classList.add('content-events__list--row');
				} else if (direction === 'col') {
					contentEventsList.classList.remove('content-events__list--row');
					contentEventsList.classList.add('content-events__list--col');
				}
			});
		});

		function removeFilterClass() {
			filterBtns.forEach(btn => {
				btn.classList.remove('filter-buttons__button--active');
			});
		}

		function addFilterClass(array, i) {
			array[i].classList.add('filter-buttons__button--active');
		}
	}

	// Добавление Index объектам для анимациия
	function setIndexAnimation(selector) {
		if (!selector) return;

		const items = document.querySelectorAll(selector);

		items.forEach((item, i) => {
			item.style.cssText = `
				--i: ${i};
			`;
		});
	}

	setIndexAnimation('.tabs-main-page .tabs-main__title');
	setIndexAnimation('.certificate .organizations__img');
	setIndexAnimation('.header .menu__item');
	setIndexAnimation('.steps .items-steps__item');
	setIndexAnimation('.curator .socials-items__item');
	setIndexAnimation('.presentation .content-list-item');
	setIndexAnimation('.course-page__register .form-page__inner');
	setIndexAnimation('.footer .footer-icons-socials__item');
	setIndexAnimation('.footer .spollers-top-footer__item');
	setIndexAnimation('.question .content-list-item');
	setIndexAnimation('.watch-video .watch-video__item');
	setIndexAnimation('.core-values .item-core-values');
	setIndexAnimation('.our-blog .tabs-our-blog__title');
	setIndexAnimation('.post-aside .tag');
	setIndexAnimation('.post-article .tag');
	setIndexAnimation('.post-article .socials-items__item');
	setIndexAnimation('.breadcrumbs__item');
	setIndexAnimation('.contact-info .item-contact');
	setIndexAnimation('.contact-info .socials-items__item');

	function scrollMenu(menuSelector, addSelector) {
		if (!menuSelector || !addSelector) return console.error('Ошибка');

		const menu = document.querySelector(menuSelector);
		const clientHeight = document.documentElement.clientHeight / 3;
		let scrollHeight = 0;

		window.addEventListener('scroll', () => {
			scrollHeight = window.pageYOffset;

			if (scrollHeight > clientHeight) {
				menu.classList.add(addSelector);
			} else {
				menu.classList.remove(addSelector);
			}
		});
	}

	scrollMenu('.header', '_header-fixed');

});
