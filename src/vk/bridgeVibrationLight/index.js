import vkBridge from '@vkontakte/vk-bridge';

/**
 * Вибрация слабая
 * @return {Promise}
 */
const bridgeVibrationLight = () => {
	if (vkBridge.supports('VKWebAppTapticImpactOccurred')) {
		return vkBridge.send('VKWebAppTapticImpactOccurred', { style: 'light' });
	}
};

export default bridgeVibrationLight;
