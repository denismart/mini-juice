import vkBridge from '@vkontakte/vk-bridge';

/**
 * Вибрация средняя
 * @return {Promise}
 */
const bridgeVibrationMedium = () => {
    if (vkBridge.supports('VKWebAppTapticImpactOccurred')) {
        return vkBridge.send('VKWebAppTapticImpactOccurred', { style: 'medium' });
    }

    return Promise.resolve(false);
};

export default bridgeVibrationMedium;
