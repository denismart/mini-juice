import vkBridge from '@vkontakte/vk-bridge';

/**
 * Показать долгую рекламу
 * @return {Promise}
 */
const bridgeShowRewardAd = () => vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' });

export default bridgeShowRewardAd;
