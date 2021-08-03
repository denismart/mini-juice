/**
 * Подготовить ссылку для ODR.
 * @param {string} link - Ссылка.
 * @return {string}
 */
const prepareLinkForOdr = (link) => (+process.env.REACT_APP_IS_ODR ? link.replace('https:', 'vkcors:').replace('http:', 'vkcors:') : link);

export default prepareLinkForOdr;
