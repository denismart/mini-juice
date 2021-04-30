import {
    isDesktopWeb,
    isIosApp,
    isMobile,
    isMobileIpad,
    isMobileWeb,
} from '../../vk';
import isAndroidApp from '../../vk/isAndroidApp';

/**
 * Возвращаем класс дял платформы
 * @param {string} className - Название класса.
 * @param {Object} params - Парметры функции.
 * @param {boolean} params.isNeedWebMvkApp - Добавлять ли web, mvk, app.
 * @param {boolean} params.isNeedIpad - Добавлять ли ipad.
 * @param {boolean} params.isNeedIosOrAndroid - Добавлять ли ios или android.
 * @param {boolean} params.isOnlyAdditionalClasses - Вернуть только добавочные классы.
 * @return {string}
 */
const getPlatformClassNames = (className, params = {}) => {
    const isNeedWebMvkApp = params.isNeedWebMvkApp !== undefined ? params.isNeedWebMvkApp : true;
    const isNeedIpad = params.isNeedIpad !== undefined ? params.isNeedIpad : false;
    const isNeedIosOrAndroid = params.isNeedIosOrAndroid !== undefined
        ? params.isNeedIosOrAndroid : false;
    const isOnlyAdditionalClasses = params.isOnlyAdditionalClasses !== undefined
        ? params.isOnlyAdditionalClasses : false;

    const fullClassName = [];

    if (isNeedWebMvkApp) {
        if (isDesktopWeb()) {
            fullClassName.push(`${className}_web`);
        } else if (isMobileWeb()) {
            fullClassName.push(`${className}_mvk`);
        } else if (isMobile()) {
            fullClassName.push(`${className}_app`);
        }
    }

    if (isNeedIpad) {
        if (isMobileIpad()) {
            fullClassName.push(`${className}_ipad`);
        }
    }

    if (isNeedIosOrAndroid) {
        if (isIosApp()) {
            fullClassName.push(`${className}_ios`);
        } else if (isAndroidApp()) {
            fullClassName.push(`${className}_android`);
        }
    }

    if (!isOnlyAdditionalClasses) {
        fullClassName.unshift(className);
    }

    return fullClassName.join(' ');
};

export default getPlatformClassNames;
