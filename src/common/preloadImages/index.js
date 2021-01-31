import preloadImage from '../preloadImage';
import timeLogStart from '../timeLogStart';
import timeLogEnd from '../timeLogEnd';

/**
 * Предзагрузка картинок поочередно
 * @param {Array} imageUrls - Массив картинок.
 * @return {Promise}
 */
const preloadImages = async (imageUrls) => {
    timeLogStart('preload-images');

    for (let i = 0; i < imageUrls.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await preloadImage(imageUrls[i]);
    }

    timeLogEnd('preload-images');

    return Promise.resolve();
};

export default preloadImages;
