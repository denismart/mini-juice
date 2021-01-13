import GA from 'react-ga';
import MINI from '../../locals/MINI';

/**
 * Посылает событие в гугл аналитику
 * @param {string} category - Категория события.
 * @param {string} action - Действие события.
 * @param {string} label - Описание действия.
 * @param {number} value - Значение события.
 */
const googleEvent = (category, action, label = undefined, value = undefined) => {
    if (MINI.GOOGLE_INITIALIZED) {
        GA.event({
            category,
            action,
            label,
            value,
        });
    }
};

export default googleEvent;
