import googleEvent from '../googleEvent';

/**
 * Посылает событие в гугл аналитику
 * @param {string} page - Название страницы.
 */
const googleEventPage = (page) => googleEvent('page', page);

export default googleEventPage;
