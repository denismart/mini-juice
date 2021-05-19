/**
 * Нули для отделения каждого третьего порядка
 * @param {number | string} num - Число.
 * @return {string}
 */
const numberWithSpaces = (num) => {
    if (+num === 0 || num === '0') {
        return '0';
    }

    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return parts.join('.');
};

export default numberWithSpaces;
