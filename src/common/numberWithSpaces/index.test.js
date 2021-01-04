import numberWithSpaces from './index';

test('numberWithSpaces #1', () => {
    expect(numberWithSpaces(1000)).toBe('1 000');
});

test('numberWithSpaces #2', () => {
    expect(numberWithSpaces(1000.1)).toBe('1 000.1');
});

test('numberWithSpaces #3', () => {
    expect(numberWithSpaces(100000000.1)).toBe('100 000 000.1');
});
