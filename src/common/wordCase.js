import { numberWithSpaces } from './numberWithSpaces';

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
export const wordCase = (num, one, two, five, withNum = false, isNumWithSpaces = true) => {
    const checkNum = num % 100;
    num = isNumWithSpaces ? numberWithSpaces(num) : num;

    if (checkNum % 10 === 1 && (checkNum < 10 || checkNum > 20)) {
        return withNum ? `${num} ${one}` : num;
    }

    if (checkNum % 10 >= 2 && checkNum % 10 <= 4 && (checkNum < 10 || checkNum > 20)) {
        return two;
    }

    return five;
};
