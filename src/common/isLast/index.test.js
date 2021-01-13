import last from './index';

test('last #1', () => {
    expect(last([1, 6, 3, 4, 4, 2, 5, 8, 5])).toBe(5);
});

test('last #2', () => {
    expect(last([1])).toBe(1);
});

test('last #3', () => {
    expect(last(['1', 123, 14.11, ['123', 11]])).toEqual(['123', 11]);
});

test('last #4', () => {
    expect(last([])).toBeUndefined();
});
