import swiper from "../libs/slider.js";
import tippy from "../libs/tippy.js";
import rangeInit from "../libs/range.js";
import spoller from "../modules/spoller.js";
import dynamicAdapt from "../modules/dynamicAdapt.js";
import menuBurger from "../modules/menuBurger.js";
import ratingStar from "../modules/ratingStar.js";
import select from "../modules/select.js";
import tabs from "../modules/tabs.js";
import smoothScrolling from "../modules/smoothScroll.js";
import timer from "../modules/timer.js";
import forms from "../modules/forms.js";
import modal from "../modules/modal.js";
import watcher from "../modules/watcher.js";
import animation from "../modules/animation.js";

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {

		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

// Уникализация массива
export function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}
// FLS (Full Logging System)
export function FLS(message) {
	setTimeout(() => {
		if (window.FLS) {
			console.log(message);
		}
	}, 0);
}

// Экспорт функция.
export {
	isWebp,
	swiper,
	tippy,
	spoller,
	dynamicAdapt,
	menuBurger,
	ratingStar,
	select,
	rangeInit,
	tabs,
	smoothScrolling,
	timer,
	forms,
	modal,
	watcher,
	animation
};