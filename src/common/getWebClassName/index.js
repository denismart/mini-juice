import {
    isDesktopWeb,
    isIosApp,
    isMobile,
    isMobileIpad,
    isMobileWeb,
} from '../../vk';
import isAndroidApp from '../../vk/isAndroidApp';

/**
 * Возвращаем класс для платформы
 * @param {string} className - Название класса.
 * @param {Object} params - Парметры функции.
 * @param {boolean} params.isNeedWebMvkApp - Добавлять ли web, mvk или app.
 * @param {boolean} params.isNeedIpad - Добавлять ли ipad.
 * @param {boolean} params.isNeedIosAndroid - Добавлять ли ios или android.
 * @param {boolean} params.isOnlyAdditionalClasses - Вернуть только добавочные классы.
 * @param {boolean} params.defaultWebMvkApp - Значение по-умолчанию если не найден web, mvk или app.
 * @param {boolean} params.defaultIpad - Значение по-умолчанию если не найден ipda.
 * @param {boolean} params.defaultIosAndroid - Значение по-умолчанию если не найден ios или android.
 * @return {string}
 */
const getPlatformClassNames = (className, params = {}) => {
    const isNeedWebMvkApp = params.isNeedWebMvkApp !== undefined ? params.isNeedWebMvkApp : true;
    const isNeedIpad = params.isNeedIpad !== undefined ? params.isNeedIpad : false;
    const isNeedIosAndroid = params.isNeedIosAndroid !== undefined
        ? params.isNeedIosAndroid : false;
    const isOnlyAdditionalClasses = params.isOnlyAdditionalClasses !== undefined
        ? params.isOnlyAdditionalClasses : false;
    const defaultWebMvkApp = params.defaultWebMvkApp !== undefined ? params.defaultWebMvkApp : '';
    const defaultIpad = params.defaultIpad !== undefined ? params.defaultIpad : '';
    const defaultIosAndroid = params.defaultIosAndroid !== undefined ? params.defaultIosAndroid : '';

    const fullClassName = [];

    if (isNeedWebMvkApp) {
        if (isDesktopWeb()) {
            fullClassName.push(`${className}_web`);
        } else if (isMobileWeb()) {
            fullClassName.push(`${className}_mvk`);
        } else if (isMobile()) {
            fullClassName.push(`${className}_app`);
        } else {
            fullClassName.push(`${className}_${defaultWebMvkApp}`);
        }
    }

    if (isNeedIpad) {
        if (isMobileIpad()) {
            fullClassName.push(`${className}_ipad`);
        } else {
            fullClassName.push(`${className}_${defaultIpad}`);
        }
    }

    if (isNeedIosAndroid) {
        if (isIosApp()) {
            fullClassName.push(`${className}_ios`);
        } else if (isAndroidApp()) {
            fullClassName.push(`${className}_android`);
        } else {
            fullClassName.push(`${className}_${defaultIosAndroid}`);
        }
    }

    if (!isOnlyAdditionalClasses) {
        fullClassName.unshift(className);
    }

    return fullClassName.join(' ');
};

export default getPlatformClassNames;
