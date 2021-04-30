import bridgeSubscribe from '../bridgeSubscribe';

/**
 * Подписываемся на отлов события изменения темы
 * и меняем тему
 */
const bridgeSubscribeTheme = () => {
    const changeTheme = (data) => {
        document.body.setAttribute('scheme', data.scheme);
    };

    bridgeSubscribe('VKWebAppUpdateConfig', changeTheme);
};

export default bridgeSubscribeTheme;
