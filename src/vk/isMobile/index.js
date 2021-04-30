import isMobileWeb from '../isMobileWeb';
import isMobileApp from '../isMobileApp';

/**
 * Проверить, что открыто через приложение на телефоне
 * @return {boolean}
 */
const isMobile = () => isMobileApp() || isMobileWeb();

export default isMobile;
