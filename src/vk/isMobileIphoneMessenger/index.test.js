import isMobileIphoneMessenger from './index';

const { location } = window;

describe('isMobileIphoneMessenger === true', () => {
    beforeEach(() => {
        delete global.window.location;
        global.window.location = {
            href:
                'https://prod.front.fortunewheel.devstars.vk-apps.com/?v=1.2&vk_access_token_settings=friends,photos&vk_app_id=7486264&vk_are_notifications_enabled=0&vk_is_app_user=1&vk_is_favorite=0&vk_language=ru&vk_platform=mobile_iphone_messenger&vk_ref=catalog_recent&vk_ts=1609766021&vk_user_id=4267535&sign=NyJxHzjKQv7_pDJXviq4x7Dv9lilOnPSEXLrExqyo3k',
        };
    });

    afterEach(() => {
        window.location = location;
    });

    test('isMobileIphone #1', () => {
        expect(isMobileIphoneMessenger()).toBeTruthy();
    });
});

describe('isMobileIphoneMessenger === false', () => {
    beforeEach(() => {
        delete global.window.location;
        global.window.location = {
            href:
                'https://prod.front.fortunewheel.devstars.vk-apps.com/?v=1.2&vk_access_token_settings=friends,photos&vk_app_id=7486264&vk_are_notifications_enabled=0&vk_is_app_user=1&vk_is_favorite=0&vk_language=ru&vk_platform=mobile_android&vk_ref=catalog_recent&vk_ts=1609766021&vk_user_id=4267535&sign=NyJxHzjKQv7_pDJXviq4x7Dv9lilOnPSEXLrExqyo3k',
        };
    });

    afterEach(() => {
        window.location = location;
    });

    test('isMobileIphone #2', () => {
        expect(isMobileIphoneMessenger()).toBeFalsy();
    });
});
