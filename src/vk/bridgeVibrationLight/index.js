import vkBridge from '@vkontakte/vk-bridge';

/**
 * Вибрация слабая
 * @return {Promise}
 */
const bridgeVibrationLight = () => vkBridge.send('VKWebAppTapticImpactOccurred', { style: 'light' });

export default bridgeVibrationLight;
