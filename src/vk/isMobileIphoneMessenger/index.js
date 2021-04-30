import getAppPlatform from '../getAppPlatform/index';

/**
 * Проверить, что открыто официальное приложение для iPhone
 * @return {boolean}
 */
const isMobileIphoneMessenger = () => getAppPlatform() === 'mobile_iphone_messenger';

export default isMobileIphoneMessenger;
