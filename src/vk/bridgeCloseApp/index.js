import vkBridge from '@vkontakte/vk-bridge';

/**
 * Закрываем приложение ВК
 * @param {string} status - Статус закрытия (failed или success),
 * передается в родительское приложение.
 * @param {Object} payload - Данные, передаваемые в родительское приложение.
 * @return {Promise}
 */
const bridgeCloseApp = (status = undefined, payload = {}) => vkBridge.send('VKWebAppClose', { status, payload });

export default bridgeCloseApp;
