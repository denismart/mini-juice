import numberWithSpaces from '../numberWithSpaces';

/**
 * Склоняет слово в зависимости от числа
 * @param {number} num - Число.
 * @param {string} one - Слово, для числа 1.
 * @param {string} two - Слово, для числа 2.
 * @param {string} five - Слово, для остальных чисел.
 * @param {boolean} withNum - Выводить число вместе со словом или нет.
 * @param {boolean} isNumWithSpaces - Разделять ли пробелами каждые 3 порядка.
 * @return {string}
 */
const wordCase = (num, one, two, five, withNum = true, isNumWithSpaces = true) => {
    const checkNum = num % 100;
    const numFormatted = isNumWithSpaces ? numberWithSpaces(num) : num;

    const format = (numWithWord, word) => (withNum ? `${numWithWord} ${word}` : word);

    if (checkNum % 10 === 1 && (checkNum < 10 || checkNum > 20)) {
        return format(numFormatted, one);
    }

    if (checkNum % 10 >= 2 && checkNum % 10 <= 4 && (checkNum < 10 || checkNum > 20)) {
        return format(numFormatted, two);
    }

    return format(numFormatted, five);
};

export default wordCase;
