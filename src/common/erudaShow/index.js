import * as eruda from 'eruda';
import MINI from '../../locals/MINI';

/**
 * Открыть eruda
 */
const erudaShow = () => {
    if (MINI.ERUDA_INIT) {
        eruda.show();
    }
};

export default erudaShow;
