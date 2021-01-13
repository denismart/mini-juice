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
) => vkBridge.send('VKWebAppSetViewSettings', {
    ...params,
});

export default bridgeSetStatusBar;
