/**
 * Проверяет есть ли соединение с интернетом
 * @return {boolean}
 */
const isInternetOnline = () => window.navigator.onLine;

export default isInternetOnline;
