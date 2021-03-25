import cryptoMd5 from 'crypto-js/md5';

/**
 * Преобразовать значение в md5 строку
 * @param {Array | Object | string | number | boolean} value - Значение, которое надо преобразовать.
 */
const md5 = (value) => (typeof value === 'string' ? cryptoMd5(value) : cryptoMd5(JSON.stringify(value)));

export default md5;
