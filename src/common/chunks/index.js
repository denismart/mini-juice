/**
 * Получить число текущей даты
 * @param {Array} array - Массив, который необходимо поделить.
 * @param {number} perChunk - Количество элементов в каждом паке.
 * @return {Array}
 */
const chunks = (array, perChunk) => {
    const arrays = [];

    while (array.length > 0) {
        arrays.push(array.splice(0, perChunk));
    }

    return arrays;
};

export default chunks;
