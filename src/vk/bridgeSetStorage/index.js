import vkBridge from '@vkontakte/vk-bridge';

/**
 * Установка значения в Storage
 * @param {string} key - Ключ.
 * @param {string} value - Значение.
 * @return {Promise}
 */
const bridgeSetStorage = (key, value) => vkBridge.send('VKWebAppStorageSet', { key, value });

export default bridgeSetStorage;
