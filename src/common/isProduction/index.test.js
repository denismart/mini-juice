import isProduction from './index';

const prevProdStatus = process.env.REACT_APP_PROD_STATUS;
const prevNodeEnv = process.env.NODE_ENV;

test('isProduction #1', () => {
    expect(isProduction(true)).toBeTruthy();
});

describe.each([
    ['production', 'production', true],
    ['production', 'development', true],
    ['development', 'production', false],
    ['development', 'development', false],
    ['none', 'production', true],
    ['none', 'development', false],
])('isProduction (PROD_STATUS = %s, NODE_ENV = %s)', (prodStatus, nodeEnv, expected) => {
    beforeEach(() => {
        process.env.REACT_APP_PROD_STATUS = prodStatus;
        process.env.NODE_ENV = nodeEnv;
    });

    afterEach(() => {
        process.env.REACT_APP_PROD_STATUS = prevProdStatus;
        process.env.NODE_ENV = prevNodeEnv;
    });

    test(`isProduction returns ${expected}`, () => {
        expect(isProduction()).toBe(expected);
    });
});
