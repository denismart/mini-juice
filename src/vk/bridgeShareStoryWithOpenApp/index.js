import vkBridge from '@vkontakte/vk-bridge';
import getAppId from '../getAppId';
import MINI from '../../locals/MINI';
import googleEventShareStoryTotal from '../../google/googleEventShareStoryTotal';
import googleEventShareStorySuccess from '../../google/googleEventShareStorySuccess';
import googleEventShareStoryFail from '../../google/googleEventShareStoryFail';

/**
 * Устанавливаем статус бар
 * @param {string} base64Image - Картинка в base64.
 * @param {Object} params - Дополнительные параметры.
 * @return {Promise}
 */
const bridgeShareToStoryWithOpen = (base64Image, openButton, params = {}) => {
    if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHARE) {
        googleEventShareStoryTotal();
    }

    return vkBridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        locked: true,
        blob: base64Image,
        attachment: {
            text: 'open',
            type: 'url',
            url: `https://vk.com/app${getAppId()}`,
        },
        ...params,
    }).then(() => {
        if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHARE) {
            googleEventShareStorySuccess();
        }
    }).catch(() => {
        if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHARE) {
            googleEventShareStoryFail();
        }
    });
};

export default bridgeShareToStoryWithOpen;
