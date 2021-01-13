import googleEvent from '../googleEvent';

/**
 * Посылает событие в гугл аналитику
 * @param {string} shareEvent - Название share события.
 */
const googleEventShare = (shareEvent) => googleEvent('share', shareEvent);

export default googleEventShare;
