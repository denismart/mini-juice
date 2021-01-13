import isDevelopment from '../isDevelopment/index';

/**
 * Проверяем режима прода
 * @param message - Сообщение для вывода.
 * @param {boolean} forceLog - Обязательно выполнить.
 */
const devLog = (message, forceLog = false) => {
    if (forceLog || isDevelopment()) {
        console.log(message);
    }
};

export default devLog;
