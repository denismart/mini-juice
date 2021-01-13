import googleEvent from '../googleEvent';

/**
 * Посылает событие в гугл аналитику
 * @param {string} buttonClickEvent - Название действие клика по кнопке.
 */
const googleEventButton = (buttonClickEvent) => googleEvent('button', buttonClickEvent);

export default googleEventButton;
