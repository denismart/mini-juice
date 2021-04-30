import * as eruda from 'eruda';
import MINI from '../../locals/MINI';
import isDevelopment from '../isDevelopment/index';

/**
 * Включаем eruda для отладки
 * @param {boolean} forceRun - Обязательно запустить.
 */
const erudaInit = (forceRun = false) => {
    if (isDevelopment(forceRun) && !MINI.ERUDA_INIT) {
        const divElement = document.createElement('div');
        document.body.append(divElement);

        eruda.init({
            container: divElement,
            useShadowDom: false,
        });

        MINI.ERUDA_INIT = true;
    }
};

export default erudaInit;
