/**
 * Предзагрузка картинок
 * @param {Array} imageUrls - Массив картинок.
 * @return {Promise}
 */
const preloadImages = (imageUrls) => {
    const imagePromises = [];
    imageUrls.forEach((imageUrl) => {
        imagePromises.push(
            new Promise((resolve) => {
                const image = new Image();
                image.onload = resolve;
                image.onerror = resolve;
                image.src = imageUrl;
            }),
        );
    });

    return Promise.all([...imagePromises]);
};

export default preloadImages;
