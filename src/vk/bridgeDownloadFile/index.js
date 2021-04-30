import vkBridge from '@vkontakte/vk-bridge';

/**
 * Скачиваем файл на устройство
 * @param {string} url - URL файла, либо его data uri,
 * @param {Object} filename - Имя файла.
 * @return {Promise}
 */
const bridgeDownloadFile = (url, filename) => vkBridge.send('VKWebAppDownloadFile', { url, filename });

export default bridgeDownloadFile;
