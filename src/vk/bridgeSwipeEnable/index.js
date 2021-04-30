import vkBridge from '@vkontakte/vk-bridge';

/**
 * Включает свайпы
 * @return {Promise}
 */
const bridgeSwipeEnable = () => vkBridge.send('VKWebAppEnableSwipeBack');

export default bridgeSwipeEnable;
