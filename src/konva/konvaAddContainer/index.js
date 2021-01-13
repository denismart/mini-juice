import randomInt from '../../common/randomInt/index';

/**
 * Добавить контейнер для рендера
 * @param {string | number} containerId - Суффикс контейнера в DOM.
 * @return {HTMLElement}
 */
const konvaAddContainer = (containerId = randomInt(0, Number.MAX_SAFE_INTEGER)) => {
    const container = document.createElement('div');
    container.id = `konva-container-${containerId}`;
    container.style.display = 'none';
    document.body.appendChild(container);

    return container;
};

export default konvaAddContainer;
