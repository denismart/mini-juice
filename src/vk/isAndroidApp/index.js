import isMobileAndroid from '../isMobileAndroid';
import isMobileAndroidMessenger from '../isMobileAndroidMessenger';

/**
 * Проверить, что открыто через приложение на ОС android
 * @return {boolean}
 */
const isAndroidApp = () => isMobileAndroid() || isMobileAndroidMessenger();

export default isAndroidApp;
