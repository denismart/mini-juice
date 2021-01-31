import timeLogStart from '../timeLogStart';
import timeLogEnd from '../timeLogEnd';
import timeLog from '../timeLog';

/**
 * Предзагрузка картинок
 * @param {string} imageUrl - Ссылка картинки.
 * @return {Promise}
 */
const preloadImage = (imageUrl) => new Promise((resolve) => {
    timeLogStart(imageUrl);

    const image = new Image();
    image.onload = () => {
        resolve();
        timeLogEnd(imageUrl);
    };

    image.onerror = (e) => {
        timeLog(imageUrl, e);
        timeLogEnd(imageUrl);
        resolve();
    };

    image.src = imageUrl;
});

export default preloadImage;
