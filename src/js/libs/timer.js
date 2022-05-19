export default class Timer {
    constructor({
        deadLine,
        timerWrapper,
        daysSelector,
        hoursSelector,
        minutesSelector,
        secondsSelector
    }) {
        this.deadLine = deadLine;
        this.timerWrapper = document.querySelector(timerWrapper);
        this.daysSelector = this.timerWrapper.querySelector(daysSelector);
        this.hoursSelector = this.timerWrapper.querySelector(hoursSelector);
        this.minutesSelector = this.timerWrapper.querySelector(minutesSelector);
        this.secondsSelector = this.timerWrapper.querySelector(secondsSelector);
    }

    getZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    calcDate(deadLine) {
        const
            date = Date.parse(deadLine) - Date.parse(new Date()),
            days = Math.floor(date / (1000 * 60 * 60 * 24)),
            hours = Math.floor(date / (1000 * 60 * 60) % 24),
            minutes = Math.floor(date / (1000 * 60) % 60),
            seconds = Math.floor(date / (1000) % 60);

        return {
            'date': date,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    postDate(deadLine) {
        const newDate = this.calcDate(deadLine);

        if (newDate.date <= 0) {
            this.daysSelector.innerText = this.getZero(0);
            this.hoursSelector.innerText = this.getZero(0);
            this.minutesSelector.innerText = this.getZero(0);
            this.secondsSelector.innerText = this.getZero(0);
        } else {
            this.daysSelector.innerText = this.getZero(newDate.days);
            this.hoursSelector.innerText = this.getZero(newDate.hours);
            this.minutesSelector.innerText = this.getZero(newDate.minutes);
            this.secondsSelector.innerText = this.getZero(newDate.seconds);
        }
    }

    init() {
        this.postDate(this.deadLine);
        setInterval(() => this.postDate(this.deadLine), 1000);
    }
}
