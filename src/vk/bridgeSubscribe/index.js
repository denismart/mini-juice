import vkBridge from '@vkontakte/vk-bridge';

/**
 * Подписываемся на отлов события
 * @param {string | Array} bridgeEvent - Одно событие Result, или массив для еще и Fail.
 * @param {function | Array} callback - Колбек для события Result, или массив для еще и Fail.
 */
const bridgeSubscribe = (bridgeEvent, callback) => {
    const bridgeEventArr = [];
    const callbackArr = [];

    if (typeof bridgeEvent === 'string') {
        bridgeEventArr.push(bridgeEvent);
        callbackArr.push(callback);
    } else {
        bridgeEventArr.push(...bridgeEvent);
        callbackArr.push(...callback);
    }

    const successCallback = (e) => {
        if (e.detail.type === bridgeEventArr[0]) {
            callbackArr[0](e.detail.data);
        }
    };

    const failCallback = (e) => {
        if (e.detail.type === bridgeEventArr[1]) {
            callbackArr[1](e.detail.data);
        }
    };

    const filteredCallback = (e) => {
        if (typeof bridgeEvent === 'string') {
            successCallback(e);
        } else {
            successCallback(e);
            failCallback(e);
        }
    };

    vkBridge.subscribe(filteredCallback);
};

export default bridgeSubscribe;
