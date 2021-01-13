import { useEffect, useRef } from 'react';

/**
 * Хук по аналогии с UseEffect, только не срабатывает лишний при инициализации
 * @param {function} effect - Колбек для useEffect.
 * @param {array} dependencies - Массив зависимостей для обновления.
 */
const useEffectNext = (effect, dependencies = []) => {
    const initialRender = useRef(true);

    useEffect(() => {
        let effectReturns = () => {};

        if (initialRender.current) {
            initialRender.current = false;
        } else {
            effectReturns = effect();
        }

        return effectReturns;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};

export default useEffectNext;
