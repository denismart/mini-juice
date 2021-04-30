import moment from 'moment';

/**
 * Получить текущую минуту
 * @return {number}
 */
const minuteNow = () => moment().minute();

export default minuteNow;
