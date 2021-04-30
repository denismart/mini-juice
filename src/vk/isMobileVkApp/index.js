import isMobileAndroid from '../isMobileAndroid/index';
import isMobileIphone from '../isMobileIphone/index';

/**
 * Проверить, что открыто через приложение клиент ВК на телефоне
 * @return {boolean}
 */
const isMobileVkApp = () => isMobileAndroid() || isMobileIphone();

export default isMobileVkApp;
