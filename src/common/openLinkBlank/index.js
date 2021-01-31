import openLink from '../openLink';

/**
 * Открыть ссылку в новой вкладке
 * @param {string} link - Ссылка.
 * @return {string}
 */
const openLinkBlank = (link) => openLink(link, '_blank');

export default openLinkBlank;
