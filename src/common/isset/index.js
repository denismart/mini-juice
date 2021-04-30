import _ from 'lodash';

/**
 * Проверить существует ли структура объекта
 * @param {Object} object - Объект, который необходимо проверить.
 * @param {string | array} path - Структура которую надо првоерить на существование.
 * @return {boolean}
 */
const isset = (object, path) => _.has(object, path);

export default isset;
