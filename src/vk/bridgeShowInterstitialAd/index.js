import vkBridge from '@vkontakte/vk-bridge';
import MINI from '../../locals/MINI';
import googleEventAdInterstitialFail from '../../google/googleEventAdInterstitialFail';
import googleEventAdInterstitialTotal from '../../google/googleEventAdInterstitialTotal';
import googleEventAdInterstitialSuccess from '../../google/googleEventAdInterstitialSuccess';
import isMobile from '../isMobile';

/**
 * Показать короткую рекламу
 * @return {Promise}
 */
const bridgeShowInterstitialAd = () => {
    if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
        googleEventAdInterstitialTotal();
    }

    if (isMobile()) {
        return vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
            .then(() => {
                if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
                    googleEventAdInterstitialSuccess();
                }
            })
            .catch(() => {
                if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
                    googleEventAdInterstitialFail();
                }
            });
    }

    return Promise.reject(new Error('wrong_platform'));
};

export default bridgeShowInterstitialAd;
