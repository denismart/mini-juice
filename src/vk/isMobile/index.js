import isMobileAndroid from '../isMobileAndroid';
import isMobileIphone from '../isMobileIphone';

/**
 * Проверить, что открыто через приложение на телефоне
 * @return {boolean}
 */
const isMobile = () => isMobileAndroid() || isMobileIphone();

export default isMobile;
