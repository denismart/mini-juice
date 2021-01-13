import googleEvent from '../googleEvent';

/**
 * Посылает событие в гугл аналитику
 * @param {string} clickEvent - Название действие клика.
 */
const googleEventClick = (clickEvent) => googleEvent('click', clickEvent);

export default googleEventClick;
