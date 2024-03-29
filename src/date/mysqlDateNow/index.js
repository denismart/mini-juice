import formatDateToMysql from '../../common/formatDateToMysql';

/**
 * Получить текущую дату в MySQL формате
 * @return {string}
 */
const mysqlDateNow = () => formatDateToMysql(new Date().toJSON());

export default mysqlDateNow;
