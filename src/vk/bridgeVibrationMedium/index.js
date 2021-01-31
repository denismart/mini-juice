import vkBridge from '@vkontakte/vk-bridge';

/**
 * Вибрация средняя
 * @return {Promise}
 */
const bridgeVibrationMedium = () => vkBridge.send('VKWebAppTapticImpactOccurred', { style: 'medium' });

export default bridgeVibrationMedium;
