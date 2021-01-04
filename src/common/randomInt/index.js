/**
 * Рандомное целое число в указанном промежутке
 * @param {number} min - От.
 * @param {number} max - До.
 * @return {number}
 */
const randomInt = (min, max) => min + Math.floor((max - min) * Math.random());

export default randomInt;
