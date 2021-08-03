import axiosRequest from '../axiosRequest';
import prepareLinkForOdr from '../../vk/prepareLinkForOdr';

/**
 * Запрос
 * @param {string} method - REST-метод запроса.
 * @param {Object} postData - Передаваемые данные.
 * @param {boolean} isCheckUser - Проверять ли достоверность ВК или ОК пользователя.
 * @param {Object} params - Парметры запроса axios.
 * @param {Object} headers - Заголовки запроса axios.
 * @return {Promise} - Вернется либо фейл в формате
 * { result: 'fail', error: 'error', errorDesc: 'description' }, либо успех в формате
 * { result: success, data: {Array | Object} }
 */
const axiosRequestDefault = (
    method,
    postData = {},
    isCheckUser = false,
    params = {},
    headers = {},
) => axiosRequest(
    `${prepareLinkForOdr(process.env.REACT_APP_BACK_URL)}/${method}`,
    'post',
    postData,
    isCheckUser,
    params,
    { 'Content-Type': 'application/x-www-form-urlencoded', ...headers },
);

export default axiosRequestDefault;
