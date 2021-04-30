import isMobileVkApp from '../isMobileVkApp';
import isMobileMessenger from '../isMobileMessenger';

/**
 * Проверить, что открыто через любое приложение на телефоне
 * @return {boolean}
 */
const isMobileApp = () => isMobileVkApp() || isMobileMessenger();

export default isMobileApp;
