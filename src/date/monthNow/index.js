import moment from 'moment';

/**
 * Получить номер текущего месяца
 * @param {boolean} fromZero - Отсчет от 0.
 * @return {number}
 */
const monthNow = (fromZero = true) => (fromZero ? moment().month() : moment().month() + 1);

export default monthNow;
