import bridgeSubscribe from '../bridgeSubscribe';

/**
 * Подписываемся на отлов события запрета или разрешения нотификаций
 * @param {function} allowSuccessCallback - Колбек для успешного разрешения нотификаций.
 * @param {function} denySuccessCallback - Колбек для успешного запрещения нотификаций.
 * @param {function} allowFailCallback - Колбек для фейлового разрешения нотификаций.
 * @param {function} denyFailCallback - Колбек для фейлового запрещения нотификаций.
 */
const bridgeSubscribeNotificationsOnOff = (
    allowSuccessCallback,
    denySuccessCallback,
    allowFailCallback = () => {},
    denyFailCallback = () => {},
) => {
    const preparedCallbackAllow = (data) => {
        if (data.result) {
            allowSuccessCallback();
        } else {
            allowFailCallback();
        }
    };

    const preparedCallbackDeny = (data) => {
        if (data.result) {
            denySuccessCallback();
        } else {
            denyFailCallback();
        }
    };

    bridgeSubscribe(['VKWebAppAllowNotificationsResult', 'VKWebAppDenyNotificationsResult'], [preparedCallbackAllow, preparedCallbackDeny]);
};

export default bridgeSubscribeNotificationsOnOff;
