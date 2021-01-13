import secondsToTime from './index';

test('secondsToTime #1', () => {
    expect(secondsToTime(8671)).toMatch('2:24:31');
});

test('secondsToTime #2', () => {
    expect(secondsToTime(86713)).toMatch('24:05:13');
});

test('secondsToTime #3', () => {
    expect(secondsToTime(96713)).toMatch('26:51:53');
});

test('secondsToTime #4', () => {
    expect(secondsToTime(96713, ':', true)).toMatch('1:02:51:53');
});

test('secondsToTime #5', () => {
    expect(secondsToTime(196713, '-', true)).toMatch('2-06-38-33');
});

test('secondsToTime #6', () => {
    expect(secondsToTime(196713, '_')).toMatch('54_38_33');
});
