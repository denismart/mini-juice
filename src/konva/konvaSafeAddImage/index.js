/**
 * Добавить картинку в контейнер, если она существует
 * @param {Stage | Layer | Group} container - Контейнер в который необходимо добавить картинку.
 * @param {Image} image - Картинка.
 * @return {HTMLElement}
 */
const konvaSafeAddImage = (container, image) => {
    if (image) {
        container.add(image);
    }
};

export default konvaSafeAddImage;
