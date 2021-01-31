/**
 * Копирует массив или объект
 * @param {Array | Object} value - Массив или объект.
 * @return {Array | Object}
 */
const copy = (value) => JSON.parse(JSON.stringify(value));

export default copy;
