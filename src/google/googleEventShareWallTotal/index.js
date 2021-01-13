import googleEventShare from '../googleEventShare';

/**
 * Посылает событие в гугл аналитику
 */
const googleEventShareWallTotal = () => googleEventShare('wall-total');

export default googleEventShareWallTotal;
