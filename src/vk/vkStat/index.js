import googleGtmEvent from '../../googleGtm/googleGtmEvent';
import bridgeStatEvent from '../bridgeStatEvent';
import devLog from '../../common/devLog';

/**
 * Получение данных из Storage
 * @param {string} category - Название категории.
 * @param {string} action - Название действия.
 * @param {string} label - Название метки.
 * @param {string} delimiter - Разделитель для статы VK.
 * @param {boolean} isDebug - режим отладки.
 */
const vkStat = async (category, action, label = undefined, delimiter = '--', isDebug = false) => {
    const googleGtmEventResult = googleGtmEvent(category, action, label);
    const bridgeStatEventResult = await bridgeStatEvent(`${category}${delimiter}${action}${delimiter}${label}`)
        .catch((error) => console.log(error));

    devLog('-------------', isDebug);
    devLog('stats result:', isDebug);
    devLog('google', isDebug);
    devLog(googleGtmEventResult, isDebug);
    devLog('vk', isDebug);
    devLog(bridgeStatEventResult, isDebug);
    devLog('-------------', isDebug);
};

export default vkStat;
