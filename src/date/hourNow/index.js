import moment from 'moment';

/**
 * Получить текущий час
 * @return {number}
 */
const hourNow = () => moment().hour();

export default hourNow;
