import { useEffect, useRef } from 'react';

/**
 * Хук для добавления eventListener
 * @param {string} eventName - Название события.
 * @param {function} handler - Функция обработчик события.
 * @param {Object} element - Элемент вызывающий событие.
 */
const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef(() => {});

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) {
            return false;
        }

        const eventListener = (event) => savedHandler.current(event);

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};

export default useEventListener;
