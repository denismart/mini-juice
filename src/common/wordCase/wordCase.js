import numberWithSpaces from './numberWithSpaces';

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
const wordCase = (num, one, two, five, withNum, isNumWithSpaces) => {
    const currentWithNum = withNum !== undefined ? withNum : false;
    const currentIsNumWithSpaces = isNumWithSpaces !== undefined ? isNumWithSpaces : true;

    const checkNum = num % 100;
    const numFormatted = currentIsNumWithSpaces ? numberWithSpaces(num) : num;

    const format = (numWithWord, word) => (currentWithNum ? `${numWithWord} ${word}` : numWithWord);

    if (checkNum % 10 === 1 && (checkNum < 10 || checkNum > 20)) {
        return format(numFormatted, one);
    }

    if (checkNum % 10 >= 2 && checkNum % 10 <= 4 && (checkNum < 10 || checkNum > 20)) {
        return format(numFormatted, two);
    }

    return format(numFormatted, five);
};

export default wordCase;
