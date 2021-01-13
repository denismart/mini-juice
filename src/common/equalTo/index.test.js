import equalTo from './index';

test('equalTo #1', () => {
    expect(equalTo([1, 1, 1, 1, 1], 1)).toBeTruthy();
});

test('equal #2', () => {
    expect(equalTo([1, 1, 2, 1, 1], 2)).toBeFalsy();
});

test('equal #3', () => {
    expect(equalTo(['a', 'a', 'a'], 'a')).toBeTruthy();
});
