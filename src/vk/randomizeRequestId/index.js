/**
 * Случайное чилсо для запроса через bridge
 * @return {string}
 */
export const getNewRequestId = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

export default getNewRequestId;
