import konvaLoadImage from '../konvaLoadImage';

/**
 * Загрузка картинки и создание Konva Image
 * @param {Array | string} imageUrls - URL картинок (не более 2).
 * @param {Object} params - Параметры картинки.
 * @return {Image}
 */
const konvaLoadImageWithParams = async (imageUrls, params) => {
    let image;
    if (Array.isArray(imageUrls)) {
        image = await konvaLoadImage(imageUrls[0], imageUrls[1]);
    } else {
        image = await konvaLoadImage(imageUrls);
    }

    if (image) {
        image.setAttrs({
            ...params,
        });
    }

    return image;
};

export default konvaLoadImageWithParams;
