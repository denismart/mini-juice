import Konva from 'konva';
import konvaRemoveContainer from '../konvaRemoveContainer/index';
import konvaAddContainer from '../konvaAddContainer/index';
import konvaRenderToConsole from '../konvaRenderToConsole/index';
import devLog from '../../common/devLog/index';

/**
 * Отрендерить Konva.Layer в Base64
 * @typedef {Object} Preview
 * @property {number} previewScale - Масштаб превью.
 * @property {("dev" | "on" | "off")} previewInConsole - Вывод в консоль.
 * @param {Layer} layer - Компонент Konva.Layer.
 * @param {Preview} preview - Свойства предварительного просмотра в консоли.
 */
const konvaRenderLayerToBase64 = (
    layer,
    preview = { previewScale: 1, previewInConsole: 'dev' },
) => {
    const container = konvaAddContainer();

    const stage = new Konva.Stage({
        container: container.id,
        width: layer.getClientRect().width,
        height: layer.getClientRect().height,
    });

    stage.add(layer);

    let base64Image = null;
    if (layer.children.length > 0) {
        base64Image = stage.toDataURL();
        konvaRenderToConsole(stage, preview.previewScale, preview.previewInConsole);
    } else {
        devLog('Konva nothing to render, empty layer');
    }

    stage.destroy();
    konvaRemoveContainer(container);

    return base64Image;
};

export default konvaRenderLayerToBase64;
