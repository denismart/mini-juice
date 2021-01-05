import numberWithSpaces from './index';

test('numberWithSpaces #1', () => {
    expect(numberWithSpaces(1000)).toMatch('1 000');
});

test('numberWithSpaces #2', () => {
    expect(numberWithSpaces(1000.1)).toMatch('1 000.1');
});

test('numberWithSpaces #3', () => {
    expect(numberWithSpaces(100000000.1)).toMatch('100 000 000.1');
});
