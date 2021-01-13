import vkBridge from '@vkontakte/vk-bridge';
import MINI from '../../locals/MINI';
import googleEventAdInterstitialFail from '../../google/googleEventAdInterstitialFail';
import googleEventAdInterstitialTotal from '../../google/googleEventAdInterstitialTotal';
import googleEventAdInterstitialSuccess from '../../google/googleEventAdInterstitialSuccess';

/**
 * Показать короткую рекламу
 * @return {Promise}
 */
const bridgeShowInterstitialAd = () => {
    if (MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
        googleEventAdInterstitialTotal();
    }

    return vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
        .then(() => {
            if (MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
                googleEventAdInterstitialSuccess();
            }
        })
        .catch(() => {
            if (MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
                googleEventAdInterstitialFail();
            }
        });
};

export default bridgeShowInterstitialAd;
