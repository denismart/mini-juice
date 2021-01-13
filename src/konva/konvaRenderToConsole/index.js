import isDevelopment from '../../common/isDevelopment/index';

/**
 * Отрендерить превью в консоль
 * @param {Stage} stage - Компонент Konva Stage.
 * @param {number} scale - Масштаб.
 * @param {("dev" | "on" | "off")} showStatus - Статус вывода.
 */
const konvaRenderToConsole = (stage, scale = 1, showStatus = 'dev') => {
    if (showStatus !== 'off' && (showStatus === 'on' || (showStatus === 'dev' && isDevelopment()))) {
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
