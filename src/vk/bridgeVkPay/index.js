import vkBridge from '@vkontakte/vk-bridge';
import getAppId from '../getAppId';

/**
 * Открыть окно оплаты VK Pay
 * @param {string} action - Тип перевода.
 * @param {Object} params - Дополнительные параметры.
 * @return {Promise}
 */
const bridgeVkPay = (action = 'pay-to-service', params = {}) => vkBridge.send('VKWebAppOpenPayForm', {
    app_id: getAppId(),
    action,
    params,
});

export default bridgeVkPay;
