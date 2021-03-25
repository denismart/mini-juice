import axiosRequestDefault from '../axiosRequestDefault';

/**
 * Запрос
 * @param {string} method - REST-метод запроса.
 * @return {Promise} - Вернется либо фейл в формате
 * { result: 'fail', error: 'error', errorDesc: 'description' }, либо успех в формате
 * { result: success, data: {Array | Object} }
 */
const axiosNewUser = (method = 'new-user') => axiosRequestDefault(method, {}, true);

export default axiosNewUser;
