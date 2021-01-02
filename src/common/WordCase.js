/**
 * Склоняет слово в зависимости от числа
 * @param {number} num - Число.
 * @param {string} one - Слово, для числа 1.
 * @param {string} two - Слово, для числа 2.
 * @param {string} five - Слово, для остальных чисел.
 * @param {boolean} withNum - Выводить число вместе со словом или нет.
 * @param {boolean} isNumWithSpaces - Разделять ли пробелами каждые 3 порядка.
 * @return {number}
 */
export const WordCase = (num, one, two, five, withNum = false, isNumWithSpaces = true) => {
    num %= 100;

    if (num % 10 === 1 && (num < 10 || num > 20)) {
        return one;
    }

    if (num % 10 >= 2 && num % 10 <= 4 && (num < 10 || num > 20)) {
        return two;
    }

    return five;
};
