import noUiSlider from 'nouislider';

const rangeInit = () => {
    const rangeItems = document.querySelectorAll('[data-range]');
    if (rangeItems.length) {
        rangeItems.forEach(rangeItem => {
            const fromValue = rangeItem.querySelector('[data-range-from]');
            const toValue = rangeItem.querySelector('[data-range-to]');
            const inputs = rangeItem.querySelectorAll('[data-range-input]');
            const item = rangeItem.querySelector('[data-range-item]');

            noUiSlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)], //[0, 200000]
                connect: true,
                tooltips: [true, true],
                format: {
                    from: function (value) {
                        return parseInt(value);
                    },
                    to: function (value) {
                        return `${parseInt(value)}`;
                    }
                },
                range: {
                    'min': [Number(fromValue.dataset.rangeFrom)],
                    'max': [Number(toValue.dataset.rangeTo)]
                }
            });

            item.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = values[handle];
            });

            fromValue.addEventListener('change', function () {
                item.noUiSlider.set([this.value, null]);
            });

            toValue.addEventListener('change', function () {
                item.noUiSlider.set([null, this.value]);
            });
        });
    }
};

export default rangeInit;
// ================================================================================================================

/*
Подключение и настройка выполняеться в файле js/libs/range.js
Документация в шаблое
Документация плагина: https://refreshless.com/nouislider/
Снипет (html): range(в разработке)
 */

// Подключение стилей из node_modules
// import 'nouislider/dist/nouislider.css';


/* import noUiSlider from 'nouislider';

const rangeInit = () => {
    const priceSlider = document.querySelector('[data-range-item]');

    if (priceSlider) {
        let textFrom = priceSlider.getAttribute('data-from');
        let textTo = priceSlider.getAttribute('data-to');

        noUiSlider.create(priceSlider, {
            start: [20, 80], //[0, 200000]
            connect: [true, false],
            range: {
                'min': [0],
                'max': [200000]
            }
        });
    }

    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');
    priceStart.addEventListener('change', setPriceValues);
    priceEnd.addEventListener('change', setPriceValues);

    function setPriceValues() {
        let priceStartValue;
        let priceEndValue;
        if (priceStartValue != '') {
            priceStartValue = priceStart.value;
        }
        if (priceEnd.value != '') {
            priceEndValue = priceEnd.value;
        }
        priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
    }

};

export default rangeInit; */