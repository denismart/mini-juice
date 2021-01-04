import randomInt from './index';

test('randomInt #1', () => {
    const value = randomInt(-10, 10);

    for (let i = 0; i < 100; i += 1) {
        expect(value).toBeGreaterThanOrEqual(-100);
        expect(value).toBeLessThanOrEqual(100);
    }
});
