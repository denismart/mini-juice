/**
 * Получить координату X
 * @param element - Компонент, координату которого надо получить.
 * @return {number | null}
 */
const konvaX = (element) => (typeof element.getClientRect === 'function' ? element.getClientRect().x : null);

export default konvaX;
