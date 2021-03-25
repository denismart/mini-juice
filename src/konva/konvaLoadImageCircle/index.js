import Konva from 'konva';
import konvaLoadImage from '../konvaLoadImage';
import calcCircleFunc from '../calcCircleFunc';

/**
 * Загрузка картинки и создание круглого Konva Image
 * @param {string} imageUrl - URL картинки.
 * @param {number} radius - Радиус картинки на выходе.
 * @param {Object} imageParams - Параметры для картинки.
 * @param {Object} groupParams - Параметры для группы, в которую добавляется картинка.
 * @param {string | null} imageAlternateUrl - URL картинки на тот случай.
 * если загрузка первой потерпит неудачу.
 * @return {Group}
 */
const konvaLoadImageCircle = async (
    imageUrl,
    radius,
    imageParams = {},
    groupParams = {},
    imageAlternateUrl = null,
) => {
    const image = await konvaLoadImage(imageUrl, imageAlternateUrl);

    if (!image) {
        return null;
    }

    const realRadius = (radius || image.width());

    image.setAttrs({
        width: realRadius,
        height: realRadius,
        ...imageParams,
    });

    const group = new Konva.Group({
        clipFunc: (ctx) => calcCircleFunc(ctx, realRadius, 0, 0),
        ...groupParams,
    });
    group.add(image);

    return group;
};

export default konvaLoadImageCircle;
