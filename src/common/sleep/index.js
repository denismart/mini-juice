/**
 * Сделать паузу
 * @param {number} ms - Время в миллисекундах.
 * @return {any}
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default sleep;
