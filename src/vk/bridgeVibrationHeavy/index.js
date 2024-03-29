import vkBridge from '@vkontakte/vk-bridge';

/**
 * Вибрация сильная
 * @return {Promise}
 */
const bridgeVibrationHeavy = () => {
    if (vkBridge.supports('VKWebAppTapticImpactOccurred')) {
        return vkBridge.send('VKWebAppTapticImpactOccurred', { style: 'heavy' });
    }

    return Promise.resolve(false);
};

export default bridgeVibrationHeavy;
