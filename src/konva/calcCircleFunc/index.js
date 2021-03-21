/**
 * Рассчитать ctx для круга
 * @param {Object} ctx - Контектс.
 * @param {number} radius - Радиус.
 * @param {number} x - Позиция по X.
 * @param {number} y - Позиция по Y.
 * @return {Promise}
 */
const calcCircleFunc = (ctx, radius, x, y) => {
    ctx.arc(x + radius / 2, y + radius / 2, radius / 2, 0, Math.PI * 2, false);
};

export default calcCircleFunc;
