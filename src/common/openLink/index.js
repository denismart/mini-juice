/**
 * Открыть ссылку
 * @param {string} link - Ссылка.
 * @param {("_blank" | "_self" | "_parent" | "_top")} target - Место открытия ссылки.
 * @return {string}
 */
const openLink = (link, target = '_self') => {
    const a = document.createElement('a');
    a.href = link;
    a.target = target;

    a.dispatchEvent(
        new window.MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        }),
    );
};

export default openLink;
