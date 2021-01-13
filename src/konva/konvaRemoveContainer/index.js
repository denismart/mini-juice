/**
 * Удалить контейнер для рендера
 * @param {HTMLElement} container - Контейнер.
 */
const konvaRemoveContainer = (container) => {
    document.body.removeChild(container);
};

export default konvaRemoveContainer;
