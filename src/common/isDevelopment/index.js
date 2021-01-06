import isProduction from '../isProduction/index';

/**
 * Проверяем режима прода
 * @param {boolean} forceDev - Вернуть прод.
 */
const isDevelopment = (forceDev = false) => {
    if (!forceDev) {
        return !isProduction();
    }

    return forceDev;
};

export default isDevelopment;
