import * as eruda from 'eruda';
import MINI from '../../locals/MINI';

/**
 * Открыть eruda
 */
const erudaHide = () => {
    if (MINI.ERUDA_INIT) {
        eruda.hide();
    }
};

export default erudaHide;
