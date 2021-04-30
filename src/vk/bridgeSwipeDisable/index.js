import vkBridge from '@vkontakte/vk-bridge';

/**
 * Выключает свайпы
 * @return {Promise}
 */
const bridgeSwipeDisable = () => vkBridge.send('VKWebAppDisableSwipeBack');

export default bridgeSwipeDisable;
