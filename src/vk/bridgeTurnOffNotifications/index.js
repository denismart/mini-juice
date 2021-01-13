import vkBridge from '@vkontakte/vk-bridge';

/**
 * Запретить уведомления
 * @return {Promise}
 */
const bridgeTurnOffNotifications = () => vkBridge.send('VKWebAppDenyNotifications');

export default bridgeTurnOffNotifications;
