import leadingZero from '../leadingZero/index';

/**
 * Конвертирует секунды во время
 * @param {number} seconds - Количество секунд.
 * @param {string} delimiter - Разделитель.
 * @param {boolean} withDays - Учитывать ли дни.
 * @return {string}
 */
const secondsToTime = (seconds, delimiter = ':', withDays = false) => {
    if (withDays) {
        const days = Math.floor(seconds / 86400);
        const hours = leadingZero(Math.floor((seconds % 86400) / (3600)));
        const minutes = leadingZero(Math.floor((seconds % 3600) / 60));
        const secs = leadingZero(seconds % 60);

        return [days, hours, minutes, secs].join(delimiter);
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = leadingZero(Math.floor((seconds % 3600) / 60));
    const secs = leadingZero(seconds % 60);

    return [hours, minutes, secs].join(delimiter);
};

export default secondsToTime;
