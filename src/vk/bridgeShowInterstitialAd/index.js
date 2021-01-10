import vkBridge from '@vkontakte/vk-bridge';

/**
 * Показать короткую рекламу
 * @return {Promise}
 */
const bridgeShowInterstitialAd = () => vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' });

export default bridgeShowInterstitialAd;
