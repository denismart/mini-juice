import getAppPlatform from '../getAppPlatform/index';

/**
 * Проверить, что открыто официальное приложение для Android
 * @return {boolean}
 */
const isMobileAndroid = () => getAppPlatform() === 'mobile_android';

export default isMobileAndroid;
