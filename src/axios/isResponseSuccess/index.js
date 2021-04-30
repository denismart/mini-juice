/**
 * Проверка на то, что запрос success
 * @param {Object} response - Тело результата.
 * @return {boolean}
 */
const isResponseSuccess = (response) => response && response.result === 'success';

export default isResponseSuccess;
