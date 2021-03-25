import chunks from '../chunks';
import timeLogStart from '../timeLogStart';
import timeLogEnd from '../timeLogEnd';
import preloadImagesAll from '../preloadImagesAll';

/**
 * Предзагрузка картинок паками
 * @param {Array} imageUrls - Массив картинок.
 * @param {number} perPack - Количество картинок в каждом паке.
 * @return {Promise}
 */
const preloadImagesByPacks = async (imageUrls, perPack = 5) => {
    timeLogStart('preload-images-by-packs');

    const imageUrlsPacks = chunks(imageUrls, perPack);
    for (let i = 0; i < imageUrlsPacks.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await preloadImagesAll(imageUrlsPacks[i]);
    }

    timeLogEnd('preload-images-by-packs');

    return Promise.resolve();
};

export default preloadImagesByPacks;
