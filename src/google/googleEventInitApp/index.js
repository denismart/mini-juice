import googleEvent from '../googleEvent';

/**
 * Посылает событие в гугл аналитику
 */
const googleEventInitApp = () => googleEvent('main', 'init');

export default googleEventInitApp;
