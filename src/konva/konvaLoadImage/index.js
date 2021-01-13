import Konva from 'konva';

/**
 * Загрузка картинки и создание Konva Image
 * @param {string} imageUrl - URL картинки.
 * @param {string | null} imageAlternateUrl - URL картинки на тот случай.
 * если загрузка первой потерпит неудачу.
 * @return {Promise}
 */
const konvaLoadImage = (imageUrl, imageAlternateUrl = null) => new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = 'Anonymous';

    image.onload = () => resolve(new Konva.Image({ image }));
    image.onerror = async () => {
        if (imageAlternateUrl) {
            resolve(await konvaLoadImage(imageAlternateUrl));
        }
        resolve(null);
    };

    image.src = imageUrl;
});

export default konvaLoadImage;
