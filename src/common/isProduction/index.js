/**
 * Проверяем режима прода
 * @param {boolean} forceProd - Вернуть прод.
 */
const isProduction = (forceProd = false) => {
    if (!forceProd) {
        const customProd = process.env.REACT_APP_PROD_STATUS === 'production';
        const customNone = process.env.REACT_APP_PROD_STATUS === 'none';
        const envProd = process.env.NODE_ENV === 'production';

        return customProd || (customNone && envProd);
    }

    return forceProd;
};

export default isProduction;
