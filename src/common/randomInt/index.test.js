import randomInt from './index';

test('randomInt #1', () => {
    const values = [];
    for (let i = 0; i < 5000; i += 1) {
        const value = randomInt(-5, 5);
        expect(value).toBeGreaterThanOrEqual(-5);
        expect(value).toBeLessThanOrEqual(5);

        if (!values.includes(value)) {
            values.push(value);
        }
    }

    values.sort((a, b) => a - b);
    expect(values).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
});

test('randomInt #2', () => {
    const values = [];
    for (let i = 0; i < 100; i += 1) {
        const value = randomInt(0, 1);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(1);

        if (!values.includes(value)) {
            values.push(value);
        }
    }

    values.sort((a, b) => a - b);
    expect(values).toEqual([0, 1]);
});
