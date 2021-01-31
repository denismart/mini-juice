import vkBridge from '@vkontakte/vk-bridge';

/**
 * Вибрация сильная
 * @return {Promise}
 */
const bridgeVibrationHeavy = () => vkBridge.send('VKWebAppTapticImpactOccurred', { style: 'heavy' });

export default bridgeVibrationHeavy;
