import Konva from 'konva';
import konvaWidth from '../konvaWidth';

/**
 * Заполнить компоненты в ряд на всю ширину автоматически высчитывая промедужутки
 * @param {Array} elements - Компоненты.
 * @param {number} width - Расстояние между компонентами.
 * @return {Group}
 */
const konvaFillHorizontalFullWidth = (elements, width) => {
    const filledGroup = new Konva.Group();

    let totalWidth = 0;
    let offsetX = 0;
    elements.forEach((element) => {
        totalWidth += konvaWidth(element);
    });

    const space = (width - totalWidth) / (elements.length - 1);
    elements.forEach((element) => {
        element.setAttrs({
            x: offsetX,
        });
        filledGroup.add(element);

        offsetX += konvaWidth(element) + space;
    });

    return filledGroup;
};

export default konvaFillHorizontalFullWidth;
