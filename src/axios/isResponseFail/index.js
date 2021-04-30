/**
 * Проверка на то, что запрос fail
 * @param {Object} response - Тело результата.
 * @return {boolean}
 */
const isResponseFail = (response) => !response || response.result === 'fail';

export default isResponseFail;
