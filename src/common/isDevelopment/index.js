import isProduction from '../isProduction/index';

/**
 * Проверка режима прода
 * @param {boolean} forceDev - Вернуть прод.
 */
const isDevelopment = (forceDev = false) => {
    if (!forceDev) {
        return !isProduction();
    }

    return forceDev;
};

export default isDevelopment;
