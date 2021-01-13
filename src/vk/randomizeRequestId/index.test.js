import randomizeRequestId from './index';

test('randomizeRequestId #1', () => {
    const value = parseInt(randomizeRequestId(), 10);

    for (let i = 0; i < 1000; i += 1) {
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    }
});
