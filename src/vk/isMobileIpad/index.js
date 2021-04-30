import getAppPlatform from '../getAppPlatform/index';

/**
 * Проверить, что открыта браузерная мобильная версия
 * @return {boolean}
 */
const isMobileIpad = () => getAppPlatform() === 'mobile_ipad';

export default isMobileIpad;
