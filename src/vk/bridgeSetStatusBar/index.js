import vkBridge from '@vkontakte/vk-bridge';

/**
 * Устанавливаем статус бар
 * @return {Promise}
 */
const bridgeSetStatusBar = (
    params = {
        status_bar_style: undefined,
        action_bar_color: undefined,
        navigation_bar_color: undefined,
    },
) => {
    if (vkBridge.supports('VKWebAppSetViewSettings')) {
        return vkBridge.send('VKWebAppSetViewSettings', {
            ...params,
        });
    }

    return Promise.resolve(false);
};

export default bridgeSetStatusBar;
