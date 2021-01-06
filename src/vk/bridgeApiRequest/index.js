import vkBridge from '@vkontakte/vk-bridge';
import randomizeRequestId from '../randomizeRequestId/index';
import MINI from '../../locals/MINI/index';

/**
 * Устанавливаем статус бар
 * @return {Promise}
 */
const bridgeApiRequest = (
    method,
    params = {},
    accessToken = MINI.VK_ACCESS_TOKEN,
    version = MINI.VK_API_VERSION,
) => vkBridge
    .send('VKWebAppCallAPIMethod', {
        method,
        request_id: randomizeRequestId(),
        params: {
            ...params,
            access_token: accessToken,
            v: version,
        },
    })
    .then((success) => ({ result: 'success', data: success.response }))
    .catch((error) => ({ result: 'fail', error }));

export default bridgeApiRequest;
