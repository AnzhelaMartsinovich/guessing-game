class GuessingGame {
    //особый метод, который вызывается в момент создания класса (т.е. когда используется ключевое слово new)
    constructor() {
        // внутри конструктора указываются свойства и потом каждый представитель класса имеет эти св-а
    }

    //методы класса - то что объект умеет делать, его возможности
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.ceil((this.min + this.max) / 2);
    }

    lower() {
        this.max = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
        this.min = Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
