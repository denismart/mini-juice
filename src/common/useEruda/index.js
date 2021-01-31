import { useRef } from 'react';
import useEventListener from '../useEventListener';
import erudaInit from '../erudaInit';
import erudaShowIcon from '../erudaShowIcon';
import erudaHideIcon from '../erudaHideIcon';

/**
 * Хук для открытия Eruda по лонгтапу
 * @param {boolean} isHideIcon - Спрятать ли иконку.
 * @param {number} timeToOpenMs - Время для открытия Eruda.
 */
const useEruda = (timeToOpenMs = 10000, isHideIcon = false) => {
    const isAllowToShow = useRef(false);
    const timeout = useRef(null);

    erudaInit(true);

    if (isHideIcon) {
        erudaHideIcon();
    }

    useEventListener('touchstart', () => {
        if (isHideIcon) {
            isAllowToShow.current = false;

            if (timeout.current) {
                clearTimeout(timeout.current);
            }

            timeout.current = setTimeout(() => {
                isAllowToShow.current = true;
            }, timeToOpenMs);
        }
    });

    useEventListener('touchend', () => {
        if (isHideIcon) {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }

            if (isAllowToShow.current === true) {
                erudaShowIcon();
            }
        }
    });
};

export default useEruda;
