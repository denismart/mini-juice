import getAppPlatform from '../getAppPlatform';

/**
 * Проверить, что открыта браузерная полная версия
 * @return {boolean}
 */
const isDesktopWeb = () => getAppPlatform() === 'desktop_web';

export default isDesktopWeb;
