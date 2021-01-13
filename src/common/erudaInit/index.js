import * as eruda from 'eruda';
import isDevelopment from '../isDevelopment/index';

/**
 * Включаем eruda для отладки
 */
const erudaInit = (forceRun = false) => {
    if (isDevelopment(forceRun)) {
        eruda.init();
    }
};

export default erudaInit;
