import getAppPlatform from '../getAppPlatform/index';

/**
 * Проверить, что открыта браузерная мобильная версия
 * @return {boolean}
 */
const isMobileWeb = () => getAppPlatform() === 'mobile_web';

export default isMobileWeb;
