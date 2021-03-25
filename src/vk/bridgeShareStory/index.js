import vkBridge from '@vkontakte/vk-bridge';
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
const bridgeShareStory = (base64Image, params = {}) => {
    if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHARE) {
        googleEventShareStoryTotal();
    }

    return vkBridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        locked: true,
        blob: base64Image,
        ...params,
    }).then(() => {
        if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHARE) {
            googleEventShareStorySuccess();
        }
    }).catch(() => {
        if (MINI.VK_AUTO_GOOGLE_EVENTS_SHARE) {
            googleEventShareStoryFail();
        }
    });
};

export default bridgeShareStory;
