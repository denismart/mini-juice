/**
 * Рандомное целое число в указанном промежутке
 * @param {number} min - От.
 * @param {number} max - До.
 * @return {number}
 */
const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export default randomInt;
