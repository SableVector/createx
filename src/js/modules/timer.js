import Timer from "../libs/timer.js";

const timer = () => {
    // Инициализация таймера 
    const initTimer = () => {
        // проверка на существование таймера
        if (document.querySelector('.discount__countdown')) {
            new Timer({
                deadLine: '2022-12-31',
                timerWrapper: '.discount__countdown',
                daysSelector: '#days',
                hoursSelector: '#hours',
                minutesSelector: '#mins',
                secondsSelector: '#sec'
            }).init();
        }
    };

    initTimer();

};

export default timer;