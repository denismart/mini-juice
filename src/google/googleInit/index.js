import GA from 'react-ga';
import MINI from '../../locals/MINI';
import googleEventInitApp from '../googleEventInitApp';

/**
 * Инициализирует гугл аналитику и запускает первый евент
 * @param {string} code - Код счетчика.
 * @param {boolean} isHardInit - Выпиливаем привязанность к домену.
 * @param {boolean} isStartEvent - Запускаем стартовый евент (чтобы гугл заработал).
 * @param {boolean} debug - Режим отладки.
 */
const googleInit = (code, isHardInit = true, isStartEvent = true, debug = false) => {
    if (isHardInit) {
        GA.initialize('UA-185334757-4', {
            gaOptions: {
                cookieDomain: 'none',
                cookieFlags: 'SameSite=None; Secure',
            },
            debug,
        });
        GA.set('checkProtocolTask', null);
    } else {
        GA.initialize('UA-185334757-4', {
            debug,
        });
    }

    MINI.GOOGLE_INITIALIZED = true;

    if (isStartEvent) {
        googleEventInitApp();
    }
};

export default googleInit;
