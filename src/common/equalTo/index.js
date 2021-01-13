/**
 * Проверка, что все эелементы массива равны указанному значению
 * @param {Array} array - Массив.
 * @param value - Значение, с которым необходимо сравнить.
 */
const equalTo = (array, value) => array.every((val) => val === value);

export default equalTo;
