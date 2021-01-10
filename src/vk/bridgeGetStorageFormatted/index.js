import bridgeGetStorage from '../bridgeGetStorage/index';

/**
 * Получение и форматирование данных из Storage
 * @param {Array} keys - Массив ключей которые надо получить.
 * @return {Promise}
 */
const bridgeGetStorageFormatted = (keys) => bridgeGetStorage(keys)
    .then((response) => response.keys.reduce((a, x) => ({
        ...a,
        [x.key]: x.value,
    }), {}))
    .catch(() => ({}));

export default bridgeGetStorageFormatted;
