import isDevelopment from '../../common/isDevelopment/index';

/**
 * Отрендерить превью в консоль
 * @param {Konva.Stage} stage - Компонент Konva Stage.
 * @param {number} scale - Масштаб.
 * @param {boolean} forceRender - Вывести в любом случае.
 */
const konvaRenderToConsole = (stage, scale = 1, forceRender = false) => {
    if (forceRender || isDevelopment()) {
        const consoleBlock = [
            `padding: ${stage.height() * scale}px ${stage.width() * scale}px`,
            'background-size: contain',
            'background-repeat: no-repeat',
            `background-image: url(${stage.toDataURL()})`,
        ].join(';');

        console.log('%c ', consoleBlock);
    }
};

export default konvaRenderToConsole;
