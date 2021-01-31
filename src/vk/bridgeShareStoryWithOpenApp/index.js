import getAppId from '../getAppId';
import bridgeShareStory from '../bridgeShareStory';

/**
 * Поделить в итории с сылкой на текущий апп
 * @param {string} base64Image - Картинка в base64.
 * @param {("to_store" | "vote" | "more" | "book" | "order" | "enroll" |
 * "fill" | "signup" | "buy" | "ticket" | "write" | "open" | "learn_more" |
 * "view" | "go_to" | "contact" | "watch" | "play" | "install" | "read" |
 * "game")} openButton - Кнопка открытия приложения.
 * @param {string} hash - Хеш открытия ссылки.
 * @param {Object} params - Дополнительные параметры.
 * @return {Promise}
 */
const bridgeShareStoryWithOpenApp = (
    base64Image,
    openButton = 'open',
    hash = 'story',
    params = {},
) => bridgeShareStory(base64Image, {
    attachment: {
        text: openButton,
        type: 'url',
        url: `https://vk.com/app${getAppId()}${hash && `#${hash}`}`,
    },
    ...params,
});

export default bridgeShareStoryWithOpenApp;
