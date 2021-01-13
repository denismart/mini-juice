import vkBridge from '@vkontakte/vk-bridge';
import MINI from '../../locals/MINI';
import googleEventAdRewardTotal from '../../google/googleEventAdRewardTotal';
import googleEventAdRewardSuccess from '../../google/googleEventAdRewardSuccess';
import googleEventAdRewardFail from '../../google/googleEventAdRewardFail';

/**
 * Показать долгую рекламу
 * @return {Promise}
 */
const bridgeShowRewardAd = () => {
    if (MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
        googleEventAdRewardTotal();
    }

    return vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
        .then(() => {
            if (MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
                googleEventAdRewardSuccess();
            }
        })
        .catch(() => {
            if (MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
                googleEventAdRewardFail();
            }
        });
};

export default bridgeShowRewardAd;
