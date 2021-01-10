/**
 * Получить кроссбраузерное название функции для окончания transition или animation
 * @param {("transition" | "animation")} eventType - Тип.
 * @returns {string | boolean}
 */
const getAnimatableEndEvent = function whichAnimationType(eventType) {
    let animatableEvent;

    const el = document.createElement('fakeelement');
    const capitalType = eventType.toUpperCase();

    const animations = {
        [eventType]: `${eventType}end`,
        [`O${capitalType}`]: `o${capitalType}End`,
        [`Moz${capitalType}`]: `${eventType}end`,
        [`Webkit${capitalType}`]: `webkit${capitalType}End`,
        [`MS${capitalType}`]: `MS${capitalType}End`,
    };

    const hasEventEnd = Object.keys(animations).some((item) => {
        if (el.style[item] !== undefined) {
            animatableEvent = animations[item];
            return true;
        }

        return false;
    });

    if (!hasEventEnd) {
        return false;
    }

    return animatableEvent;
};

export default getAnimatableEndEvent;
