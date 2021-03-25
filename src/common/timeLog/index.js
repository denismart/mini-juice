import isDevelopment from '../isDevelopment';

/**
 * Завершить таймер для подсчета времени операции
 * @param {string} name - Название таймера.
 * @param {string} label - Логгировать действие.
 * @param {boolean} force - Завершить даже если не дев режим.
 */
const timeLog = (name, label, force = false) => {
    if (isDevelopment() || force) {
        console.timeLog(name, label);
    }
};

export default timeLog;
