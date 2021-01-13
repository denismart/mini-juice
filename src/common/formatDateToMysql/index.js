import leadingZero from '../leadingZero/index';

/**
 * Форматирование даты в MySQL формат
 * @param {string} date - Дата.
 * @return {string}
 */
const formatDateToMysql = (date) => {
    const d = new Date(date);

    const day = leadingZero(d.getDate());
    const month = leadingZero(d.getMonth() + 1);
    const year = d.getFullYear();

    return [year, month, day].join('-');
};

export default formatDateToMysql;
