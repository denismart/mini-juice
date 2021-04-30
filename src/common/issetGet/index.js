import _ from 'lodash';

/**
 * Проверить существует ли структура объекта и получить результат
 * @param {Object} object - Объект, который необходимо проверить.
 * @param {string | array} path - Структура которую надо првоерить на существование и вернуть.
 * @param {*} defaultValue - Структура которую надо првоерить на существование.
 * @return {*}
 */
const issetGet = (object, path, defaultValue = undefined) => _.get(object, path, defaultValue);

export default issetGet;
