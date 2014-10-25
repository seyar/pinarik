var AMOUNT_YEAR_WEEKS = 53;

function App() {
    this.width = 7;
    this.height = 7;
    this.birth = new Date(1985, 9, 7);
    this.padding = 3;
};

App.prototype.render = function () {
    var fill = document.querySelector('.calendar__fill');
    fill.style.width = AMOUNT_YEAR_WEEKS * (this.width + this.padding) + 'px';
    fill.style.height = this._getFullYears(this.birth.getFullYear()) * (this.width + this.padding) + 'px';

    var weeks = document.querySelector('.calendar__fill-weeks');
    weeks.style.width = this._getWeeksAmount(this.birth) * (this.width + this.padding) + 'px';
};

App.prototype._getFullYears = function (year) {
    return ((new Date()).getFullYear() - year).toFixed(1);
};

App.prototype._getWeeksAmount = function (birthday) {
    var now = new Date();
    birthday.setFullYear(now.getFullYear());
    var res = (now.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 7);
    return Math.floor(res);
};

var app = new App();
app.render();