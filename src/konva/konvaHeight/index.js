/**
 * Получить высоту компонента
 * @param element - Компонент, высоту которого надо получить.
 * @return {number | null}
 */
const konvaHeight = (element) => (typeof element.getClientRect === 'function' ? element.getClientRect().height : null);

export default konvaHeight;
