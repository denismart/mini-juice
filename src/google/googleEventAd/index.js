import googleEvent from '../googleEvent';

/**
 * Посылает событие в гугл аналитику
 *  * @param {string} adEvent - Название рекламного события.
 */
const googleEventAd = (adEvent) => googleEvent('ad', adEvent);

export default googleEventAd;
