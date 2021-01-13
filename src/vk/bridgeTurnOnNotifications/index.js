import vkBridge from '@vkontakte/vk-bridge';

/**
 * Разрешить уведомления
 * @return {Promise}
 */
const bridgeTurnOnNotifications = () => vkBridge.send('VKWebAppAllowNotifications');

export default bridgeTurnOnNotifications;
