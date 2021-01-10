/**
 * Выполнить и показать в консоли результат выполнения bridge функции
 * @param {Promise} bridgeFunction - Функция bridge
 * @return {Promise}
 */
const showBridgeResult = (bridgeFunction) => bridgeFunction
    .then((response) => {
        console.log('success');
        console.log(response);
    })
    .catch((error) => {
        console.log('error');
        console.log(error);
    });

export default showBridgeResult;
