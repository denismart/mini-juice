import leadingZero from './index';

test('leadingZero #1', () => {
    expect(leadingZero(123)).toBe('123');
});

test('leadingZero #2', () => {
    expect(leadingZero(0)).toBe('00');
});

test('leadingZero #3', () => {
    expect(leadingZero(5)).toBe('05');
});
