import wordCase from './index';

test('wordCase #1', () => {
    expect(wordCase(1, 'кусок', 'куска', 'кусков', false)).toBe('кусок');
});

test('wordCase #2', () => {
    expect(wordCase(2, 'кусок', 'куска', 'кусков', false)).toBe('куска');
});

test('wordCase #3', () => {
    expect(wordCase(5, 'кусок', 'куска', 'кусков', false)).toBe('кусков');
});

test('wordCase #4', () => {
    expect(wordCase(18468, 'кусок', 'куска', 'кусков')).toBe('18 468 кусков');
});

test('wordCase #5', () => {
    expect(wordCase(5132981, 'кусок', 'куска', 'кусков', true, false)).toBe('5132981 кусок');
});
