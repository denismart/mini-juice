import getAppHash from '../../vk/getAppHash';
import googleEvent from '../googleEvent';

/**
 * Посылает событие в гугл аналитику
 * @param {string} hash - Категория события.
 */
const googleEventHash = (hash = getAppHash()) => hash.length > 0 && googleEvent('hash', getAppHash());

export default googleEventHash;
