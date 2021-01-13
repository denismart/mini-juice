import Konva from 'konva';
import { konvaWidth } from '../index';
import isLast from '../../common/isLast';

/**
 * Заполнить компоненты в ряд с учетом указанного расстояния
 * @param {Array} elements - Компоненты.
 * @param {number} space - Расстояние между компонентами.
 * @param {boolean} isEdges - Нужно ли добавлять расстояние перед первым и перед последним.
 * @param {boolean} isEdgesHalf - Половина расстояния по краям.
 * @return {Group}
 */
const konvaFillHorizontal = (elements, space, isEdges = false, isEdgesHalf = false) => {
    const filledGroup = new Konva.Group();

    const edgeSpaceWidth = isEdgesHalf ? space / 2 : space;
    const edgeSpace = isEdges ? edgeSpaceWidth : 0;
    let totalWidth = edgeSpace;
    let offsetX = edgeSpace;

    elements.forEach((element, num) => {
        element.setAttrs({
            x: offsetX,
        });
        filledGroup.add(element);

        offsetX += konvaWidth(element) + space;

        totalWidth += konvaWidth(element);
        totalWidth += isLast(elements, num) ? edgeSpace : space;
    });

    const rect = new Konva.Rect({
        width: totalWidth,
        opacity: 0,
        height: 1,
    });

    filledGroup.add(rect);

    return filledGroup;
};

export default konvaFillHorizontal;
