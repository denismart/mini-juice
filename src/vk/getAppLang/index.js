/**
 * Получаем язык приложения
 * @return {string}
 */
const getAppLang = () => new URL(window.location.href).searchParams.get('vk_language');

export default getAppLang;
