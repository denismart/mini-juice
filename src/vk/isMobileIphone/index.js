import getAppPlatform from '../getAppPlatform';

/**
 * Проверить, что открыто официальное приложение для iPhone
 * @return {boolean}
 */
const isMobileIphone = () => getAppPlatform() === 'mobile_iphone';

export default isMobileIphone;
