import vkBridge from '@vkontakte/vk-bridge';

/**
 * Установка значения в Storage
 * @param {string} key - Ключ.
 * @param {string | number | boolean} value - Значение.
 * @return {Promise}
 */
const bridgeSetStorage = (key, value) => vkBridge.send(
    'VKWebAppStorageSet',
    { key, value: value.toString() },
);

export default bridgeSetStorage;
