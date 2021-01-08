/**
 * Добавляет к числу 0 в начале, если число меньше 10
 * @param {number} number - Число для форматирвания, не больше 10
 * @return {string}
 */
const leadingZero = (number) => (number >= 10 ? number.toString() : `0${number.toString()}`);

export default leadingZero;
