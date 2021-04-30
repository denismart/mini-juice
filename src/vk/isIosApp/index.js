import isMobileIpad from '../isMobileIpad';
import isMobileIphone from '../isMobileIphone';
import isMobileIphoneMessenger from '../isMobileIphoneMessenger';

/**
 * Проверить, что открыто через приложение на ОС ios
 * @return {boolean}
 */
const isIosApp = () => isMobileIphone() || isMobileIphoneMessenger() || isMobileIpad();

export default isIosApp;
