import axios from 'axios';

/**
 * Запрос
 * @param {string} url - URL запроса.
 * @param {string} method - HTTP-метод запроса.
 * @param {Object} postData - Передаваемые данные.
 * @param {boolean} isCheckUser - Проверять ли достоверность ВК или ОК пользователя.
 * @param {Object} params - Парметры запроса axios.
 * @param {Object} headers - Заголовки запроса axios.
 * @return {Promise} - Вернется либо фейл в формате
 * { result: 'fail', error: 'error', errorDesc: 'description' }, либо успех в формате
 * { result: success, data: {Array | Object} }
 */
const axiosRequest = (url, method, postData, isCheckUser = true, params = {}, headers = {}) => {
    const checkFunc = (response) => {
        if (response.data.result === 'success') {
            return response;
        }
        return Promise.reject(response.data.result !== undefined ? response.data : 'unknown');
    };

    const successFunc = (response) => response.data;

    const failFunc = (err) => {
        if (err === 'unknown') {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject({
                result: 'fail',
                error: 'unknown',
                errorDesc: err,
            });
        }

        return Promise.reject(err);
    };

    const preparedPostData = new FormData();
    Object.keys(postData).forEach((key) => {
        preparedPostData.append(key, postData[key]);
    });

    if (isCheckUser) {
        preparedPostData.append('url', window.location.href);
    }

    return axios({
        method,
        url,
        data: preparedPostData,
        headers,
        ...params,
    })
        .then((result) => checkFunc(result))
        .then((result) => successFunc(result))
        .catch((error) => failFunc(error));
};

export default axiosRequest;
