const ratingStar = () => {
    const ratings = document.querySelectorAll('.rating');

    if (ratings.length > 0) {
        initRantings();
    }

    // Основная функция
    function initRantings() {
        let ratingActive, ratingValue;

        // " Бегаем" по всем рейтингам на страницу
        for (let i = 0; i < ratings.length; i++) {
            const rating = ratings[i];
            initRanting(rating);
        }

        // Инициализация конкретного рейтинга
        function initRanting(rating) {
            initRantingVars(rating);
            setRatingActiveWidth();

            if (rating.classList.contains('rating_set')) {
                setRating(rating);
            }
        }

        // Инициализация переменных
        function initRantingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value');
        }

        // Изменяем ширину активных звезд
        function setRatingActiveWidth(i = ratingValue.innerHTML) {
            const ratingActiveWidth = i / 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }

        // Возможность указывать оценку

        function setRating(rating) {
            const ratingItems = rating.querySelectorAll('.rating__item');

            for (let i = 0; i < ratingItems.length; i++) {
                const ratingItem = ratingItems[i];

                ratingItem.addEventListener('mouseenter', function (e) {
                    // Обновление переменных
                    initRantingVars(rating);
                    // Обновление активных звезд
                    setRatingActiveWidth(ratingItem.ratingValue);
                });
                ratingItem.addEventListener('mouseleave', function (e) {
                    // Обновление активных звезд
                    setRatingActiveWidth();
                });
                ratingItem.addEventListener('click', function (e) {
                    initRanting(rating);

                    if (rating.dataset.ajax) {
                        // "Отправить" на сервер 
                        setRatingValue(ratingItem.ratingValue, rating);
                    } else {
                        // Отобразить указанную оценку
                        ratingValue.innerHTML = i + 1;
                        setRatingActiveWidth();
                    }
                });
            }
        }
    }
};

export default ratingStar;