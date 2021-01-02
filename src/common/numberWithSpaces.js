/**
 * Нули для отделения каждого третьего порядка
 * @param {number} num - Число.
 * @return {string}
 */
const numberWithSpaces = (num) => {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return parts.join('.');
};

export default numberWithSpaces;
