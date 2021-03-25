import preloadImage from '../preloadImage';
import timeLogStart from '../timeLogStart';
import timeLogEnd from '../timeLogEnd';

/**
 * Предзагрузка картинок одновременно
 * @param {Array} imageUrls - Массив картинок.
 * @return {Promise}
 */
const preloadImagesAll = async (imageUrls) => {
    timeLogStart('preload-images-all');
    const imagePromises = [];
    imageUrls.forEach((imageUrl) => {
        imagePromises.push(
            preloadImage(imageUrl),
        );
    });

    await Promise.all([...imagePromises]);
    timeLogEnd('preload-images-all');

    return Promise.resolve();
};

export default preloadImagesAll;
