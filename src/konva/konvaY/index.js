/**
 * Получить координату Y
 * @param element - Компонент, координату которого надо получить.
 * @return {number | null}
 */
const konvaY = (element) => (typeof element.getClientRect === 'function' ? element.getClientRect().y : null);

export default konvaY;
