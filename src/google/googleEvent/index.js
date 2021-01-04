import GA from 'react-ga';

/**
 * Посылает событие в гугл аналитику
 * @param {string} category - Категория события.
 * @param {string} action - Действие события.
 * @param {string} label - Описание действия.
 * @param {number} value - Значение события.
 */
const googleEvent = (category, action, label = undefined, value = undefined) => {
    GA.event({
        category,
        action,
        label,
        value,
    });
};

export default googleEvent;
