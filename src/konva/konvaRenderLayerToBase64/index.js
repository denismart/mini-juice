import Konva from 'konva';
import konvaRemoveContainer from '../konvaRemoveContainer/index';
import konvaAddContainer from '../konvaAddContainer/index';
import konvaRenderToConsole from '../konvaRenderToConsole';

/**
 * Отрендерить Konva.Layer в Base64
 * @typedef {Object} Preview
 * @property {number} previewScale - Масштаб превью.
 * @property {boolean} forcePreviewInConsole - Обязательно ли показывать в консоли.
 * @param {Konva.Layer} layer - Компонент Konva.Layer.
 * @param {Preview} preview - Свойства предварительного просмотра в консоли.
 */
const konvaRenderLayerToBase64 = async (
    layer,
    preview = { previewScale: 1, forcePreviewInConsole: false },
) => {
    const container = konvaAddContainer();

    const stage = new Konva.Stage({
        container: container.id,
        width: layer.getClientRect().width,
        height: layer.getClientRect().height,
    });

    stage.add(layer);

    const base64Image = stage.toDataURL();
    konvaRenderToConsole(stage, preview.previewScale, preview.forcePreviewInConsole);

    stage.destroy();
    konvaRemoveContainer(container);

    return base64Image;
};

export default konvaRenderLayerToBase64;
