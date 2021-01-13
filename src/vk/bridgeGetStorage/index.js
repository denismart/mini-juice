import vkBridge from '@vkontakte/vk-bridge';

/**
 * Получение данных из Storage
 * @param {Array} keys - Массив ключей которые надо получить.
 * @return {Promise}
 */
const bridgeGetStorage = (keys) => vkBridge.send('VKWebAppStorageGet', { keys });

export default bridgeGetStorage;
