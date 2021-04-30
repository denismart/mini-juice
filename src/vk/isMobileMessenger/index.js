import isMobileIphoneMessenger from '../isMobileIphoneMessenger';
import isMobileAndroidMessenger from '../isMobileAndroidMessenger';

/**
 * Проверить, что открыто через приложение-мессенджер на телефоне
 * @return {boolean}
 */
const isMobileMessenger = () => isMobileIphoneMessenger() || isMobileAndroidMessenger();

export default isMobileMessenger;
