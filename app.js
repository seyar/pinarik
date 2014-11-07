var AMOUNT_YEAR_WEEKS = 53;

/**
 * Calculates what part of live you already lived
 *
 * @param {Date} birth
 * @constructor
 */
function App(birth) /** @lends App.prototype */ {
    this.width = 12;
    this.height = 12;
    this.birth = birth || new Date(1985, 9, 7);
    this.padding = 6;
};

/**
 * Sets birthday
 *
 * @param {Date} birth
 */
App.prototype.setBirthDay = function (birth) {
    this.birth = birth;
};

/**
 * Calculates styles and apply on page
 */
App.prototype.render = function () {
    var fill = $('.calendar__fill');
    fill.width(AMOUNT_YEAR_WEEKS * (this.width + this.padding) + 'px');
    fill.height(this._getFullYears(this.birth) * (this.width + this.padding) + 'px');

    var weeks = $('.calendar__fill-weeks');
    weeks.width(this._getWeeksAmount(this.birth) * (this.width + this.padding) + 'px');
};

/**
 * Calculates full years from given date
 * @param {Date} birthday
 * @returns {String}
 */
App.prototype._getFullYears = function (birthday) {
    var now = new Date();
    //birthday.setFullYear(now.getFullYear());
    var res = (now.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(res) - 1;
};

/**
 * Calculates number of full weeks from birthday
 *
 * @param {Date} birthday
 * @returns {Number}
 */
App.prototype._getWeeksAmount = function (birthday) {
    var now = new Date();
    //birthday.setFullYear(now.getFullYear());
    var res = (now.getTime() - birthday.getTime()) % (1000 * 60 * 60 * 24 * 365);
    res = res / (1000 * 60 * 60 * 24 * 7);
    return Math.ceil(res);
};

/**
 * Starts calculations
 */
var run = function () {
    var day = $('[name=birth-day]').val();
    var month = Number($('[name=birth-month]').val()) - 1;
    var year = $('[name=birth-year]').val();
    var app = new App(new Date(year, month, day));
    app.render();
};

$('#calculate').on('click', run);

$('.form').on('submit', function () {
    run();
    return false;
});