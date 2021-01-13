import isDevelopment from './index';

const prevProdStatus = process.env.REACT_APP_PROD_STATUS;
const prevNodeEnv = process.env.NODE_ENV;

test('isDevelopment #1', () => {
    expect(isDevelopment(true)).toBeTruthy();
});

describe.each([
    ['production', 'production', false],
    ['production', 'development', false],
    ['development', 'production', true],
    ['development', 'development', true],
    ['none', 'production', false],
    ['none', 'development', true],
])('isDevelopment (PROD_STATUS = %s, NODE_ENV = %s)', (prodStatus, nodeEnv, expected) => {
    beforeEach(() => {
        process.env.REACT_APP_PROD_STATUS = prodStatus;
        process.env.NODE_ENV = nodeEnv;
    });

    afterEach(() => {
        process.env.REACT_APP_PROD_STATUS = prevProdStatus;
        process.env.NODE_ENV = prevNodeEnv;
    });

    test(`isDevelopment returns ${expected}`, () => {
        expect(isDevelopment()).toBe(expected);
    });
});
