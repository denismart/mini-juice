/**
 * Загрузка картинки
 * @param {string} imageUrl - URL картинки.
 * @param {string | null} imageAlternateUrl - URL картинки на тот случай,
 * если загрузка первой потерпит неудачу.
 * @return {Promise}
 */
const loadImage = (imageUrl, imageAlternateUrl = null) => new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = 'Anonymous';

    image.onload = () => resolve(image);
    image.onerror = async () => {
        if (imageAlternateUrl) {
            resolve(await loadImage(imageAlternateUrl));
        }
        resolve(null);
    };

    image.src = imageUrl;
});

export default loadImage;
