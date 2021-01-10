import equal from './index';

test('equal #1', () => {
    expect(equal([1, 1, 1, 1, 1])).toBeTruthy();
});

test('equal #2', () => {
    expect(equal([1, 1, 2, 1, 1])).toBeFalsy();
});

test('equal #3', () => {
    expect(equal(['a', 'a', 'a'])).toBeTruthy();
});
