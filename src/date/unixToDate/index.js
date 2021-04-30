import DATE from '../../locals/DATE';

/**
 * Получить текущую дату в MySQL формате
 * @param {boolean} unixTime - Время в формате Unix.
 * @param {boolean} withYear - Показывать ли год.
 * @return {string}
 */
const unixToDate = (unixTime, withYear = true) => {
    const date = new Date(unixTime * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    if (withYear) {
        return `${day} ${DATE.MONTHS_ROD[month]} ${year}`;
    }

    return `${day} ${DATE.MONTHS_ROD[month]}`;
};

export default unixToDate;
