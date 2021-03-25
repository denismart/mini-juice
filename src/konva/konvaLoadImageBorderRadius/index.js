import Konva from 'konva';
import konvaLoadImage from '../konvaLoadImage';
import calcBorderRadiusFunc from '../calcBorderRadiusFunc';

/**
 * Загрузка картинки с закругленными краями и создание Konva Group
 * @param {string} imageUrl - URL картинки.
 * @param {number} borderRadius - Радиус скругления картинки.
 * @param {Object} imageParams - Параметры для картинки.
 * @param {Object} groupParams - Параметры для группы, в которую добавляется картинка.
 * @param {string | null} imageAlternateUrl - URL картинки на тот случай.
 * если загрузка первой потерпит неудачу.
 * @return {Group}
 */
const loadKonvaImageWithBorders = async (
    imageUrl,
    borderRadius,
    imageParams = {},
    groupParams = {},
    imageAlternateUrl = null,
) => {
    const image = await konvaLoadImage(imageUrl, imageAlternateUrl);
    if (!image) {
        return null;
    }

    image.setAttrs({
        ...imageParams,
    });

    const group = new Konva.Group({
        clipFunc: (ctx) => calcBorderRadiusFunc(
            ctx,
            0,
            0,
            image.width(),
            image.height(),
            borderRadius,
        ),
        ...groupParams,
    });
    group.add(image);

    return group;
};

export default loadKonvaImageWithBorders;
