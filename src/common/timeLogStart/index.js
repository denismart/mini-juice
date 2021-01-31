import isDevelopment from '../isDevelopment';

/**
 * Запустить таймер для подсчета времени операции
 * @param {string} name - Название таймера.
 * @param {boolean} force - Запустить даже если не дев режим.
 */
const timeLogStart = (name, force = false) => {
    if (isDevelopment() || force) {
        console.time(name);
    }
};

export default timeLogStart;
