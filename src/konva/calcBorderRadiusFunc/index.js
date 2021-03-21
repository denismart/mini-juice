/**
 * Рассчитать ctx для скругленных краев
 * @param {Object} ctx - Контектс.
 * @param {number} radius - Радиус.
 * @param {number} x - Позиция по X.
 * @param {number} y - Позиция по Y.
 * @param {number} width - Ширина обрезания.
 * @param {number} height - Высота обрезания.
 * @return {Promise}
 */
const calcBorderRadiusFunc = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
};

export default calcBorderRadiusFunc;
