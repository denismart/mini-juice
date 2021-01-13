/**
 * Получаем ID пользоввателя
 * @return {number}
 */
const getAppUserId = () => +new URL(window.location.href).searchParams.get('vk_user_id');

export default getAppUserId;
