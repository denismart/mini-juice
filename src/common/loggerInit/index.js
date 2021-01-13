import isDevelopment from '../isDevelopment/index';

/**
 * Включаем logger для отладки Redux
 * @param {boolean} forceShow - Обязательно показать.
 */
const loggerInit = (forceShow = false) => () => (next) => (action) => {
    if (isDevelopment(forceShow)) {
        console.log('dispatching', action);
    }

    return next(action);
};

export default loggerInit;
