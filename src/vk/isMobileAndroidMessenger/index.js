import getAppPlatform from '../getAppPlatform/index';

/**
 * Проверить, что открыто официальное приложение-мессенджер для Android
 * @return {boolean}
 */
const isMobileAndroidMessenger = () => getAppPlatform() === 'mobile_android_messenger';

export default isMobileAndroidMessenger;
