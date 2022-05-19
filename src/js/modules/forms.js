import { postData } from '../services/requests.js';

"use strict"

const formsV = () => {
    const forms = document.querySelectorAll('[data-form]');
    const urlServer = '../files/server.php';

    forms.forEach(form => {
        // =================================================
        const passwordButton = form.querySelectorAll('button.form-page__password-button');

        if (passwordButton.length > 0) {
            passwordButton.forEach(button => {
                passwordActions(button);
            });
        }
        // =================================================

        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();

            let error = formValidate(form);

            let formData = new FormData(form);
            // Подгружение картинки к данным формы для отправки на сервер
            // formData.append('image', formImage.files[0]);


            // проверка формы на заполненость всех необходимых полей
            if (error === 0) {

                form.classList.add('_sending');
                postData(urlServer, formData)
                    .then(res => {
                        // alert("Отправка данных прошла успешно");
                        // Очистка превью картинки
                        // formPreview.innerHTML = '';
                        if (!res.ok) {
                            alert('Что-то пошло не так');
                        } else {
                            form.reset();

                        }
                    })
                    .catch(() => {
                        alert('Что-то пошло не так');
                    })
                    .finally(() => {
                        form.classList.remove('_sending');
                    });

            }
        }

        function formValidate(form) {
            let error = 0;
            let formReq = form.querySelectorAll('[data-req]');

            for (let i = 0; i < formReq.length; i++) {
                const input = formReq[i];

                formRemoveError(input);
                formRemoveSuccess(input);

                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                    formAddError(input);
                    error++;
                } else if (input.value === '') {
                    formAddError(input);
                    error++;
                } else {
                    formAddSuccess(input);
                }

            }

            return error;
        }

        function formAddError(input) {
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
        }

        function formRemoveError(input) {
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
        }

        function formAddSuccess(input) {
            input.parentElement.classList.add('_success');
            input.classList.add('_success');
        }

        function formRemoveSuccess(input) {
            input.parentElement.classList.remove('_success');
            input.classList.remove('_success');
        }
        // Функция теста email
        function emailTest(input) {
            return ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
        // ==========================================
        function passwordActions(button) {
            button.previousElementSibling.parentElement.classList.add('pass');

            button.addEventListener('click', () => {
                if (button.previousElementSibling.type === 'password') {
                    button.previousElementSibling.type = 'text';
                    button.querySelector('svg').style.fill = '#ff3f3a';
                } else {
                    button.previousElementSibling.type = 'password';
                    button.querySelector('svg').style.fill = '';
                }
            });
        }
        // ==========================================

        // Функционал добавления превью картинки картинки ================================================

        // Получаем инпут file в переменную
        const formImage = document.querySelector('[data-dropImage]');
        // Получаем див для превью в переменную
        const formPreview = document.querySelector('[data-dropPreview]');

        // Слушаем изменения в инпуте file
        if (formImage) {
            formImage.addEventListener('change', () => {
                uploadFile(formImage.files[0]);
            });
        }

        function uploadFile(file) {
            // проверяем тип файла

            if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
                alert("Разрешены только изображения.");
                formImage.value = '';
                return;
            }
            // Проверяем размер файла (<2 мб)
            if (file.size > 2 * 1024 * 1024) {
                alert('Файл должен быть менее 2 мб');
                return;
            }

            const reader = new FileReader();
            reader.onload = function (e) {
                formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
            };
            reader.onerror = function (e) {
                alert('Ошибка');
            };
            reader.readAsDataURL(file);
        }
    });
};

export default formsV;