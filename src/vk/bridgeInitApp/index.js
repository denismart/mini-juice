import vkBridge from '@vkontakte/vk-bridge';

/**
 * Инициализируем приложение ВК
 * @return {Promise}
 */
const bridgeInitApp = () => vkBridge.send('VKWebAppInit', { no_toolbar: true });

export default bridgeInitApp;
