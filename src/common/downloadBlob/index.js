/**
 * Копирует массив или объект
 * @param {string} blob - Строка Blob.
 * @param {string} filename - Имя файла без расширения.
 * @return {Array | Object}
 */
const downloadBlob = (blob, filename) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = blob;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default downloadBlob;
