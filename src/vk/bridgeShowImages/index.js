import vkBridge from '@vkontakte/vk-bridge';

/**
 * Показать картинки в специальном окне
 * @param {Array | string} images - Картинка или массив картинок.
 * @param {number} startIndex - С какого индекса открыть картинку.
 * @return {Promise}
 */
const bridgeShowImages = (images, startIndex = 0) => {
    let preparedImages = images;

    if (!Array.isArray(images)) {
        preparedImages = [images];
    }

    return vkBridge.send(
        'VKWebAppShowImages',
        { images: preparedImages, start_index: startIndex },
    );
};

export default bridgeShowImages;
