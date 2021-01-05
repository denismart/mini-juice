import isMobileAndroid from '../isMobileAndroid/index';
import isMobileIphone from '../isMobileIphone/index';

/**
 * Проверить, что открыто через приложение на телефоне
 * @return {boolean}
 */
const isMobile = () => isMobileAndroid() || isMobileIphone();

export default isMobile;
