/**
 * Проверить включены ли нотификации
 * @return {boolean}
 */
const getAppNotifyStatus = () => !!+new URL(window.location.href).searchParams.get('vk_are_notifications_enabled');

export default getAppNotifyStatus;
