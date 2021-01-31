import isDevelopment from '../isDevelopment';

/**
 * Завершить таймер для подсчета времени операции
 * @param {string} name - Название таймера.
 * @param {boolean} force - Завершить даже если не дев режим.
 */
const timeLogEnd = (name, force = false) => {
    if (isDevelopment() || force) {
        console.timeEnd(name);
    }
};

export default timeLogEnd;
