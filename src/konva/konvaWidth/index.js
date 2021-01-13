/**
 * Получить ширину компонента
 * @param element - Компонент, ширину которого надо получить.
 * @return {number | null}
 */
const konvaWidth = (element) => (typeof element.getClientRect === 'function' ? element.getClientRect().width : null);

export default konvaWidth;
