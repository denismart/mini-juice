import vkBridge from '@vkontakte/vk-bridge';
import MINI from '../../locals/MINI';
import googleEventAdRewardTotal from '../../google/googleEventAdRewardTotal';
import googleEventAdRewardSuccess from '../../google/googleEventAdRewardSuccess';
import googleEventAdRewardFail from '../../google/googleEventAdRewardFail';
import isMobile from '../isMobile';

/**
 * Показать долгую рекламу
 * @return {Promise}
 */
const bridgeShowRewardAd = () => {
    if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
        googleEventAdRewardTotal();
    }

    if (isMobile()) {
        return vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
            .then(() => {
                if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
                    googleEventAdRewardSuccess();
                }
            })
            .catch(() => {
                if (MINI.GOOGLE_INITIALIZED && MINI.VK_AUTO_GOOGLE_EVENTS_SHOW_AD) {
                    googleEventAdRewardFail();
                }
            });
    }

    return Promise.reject(new Error('wrong_platform'));
};

export default bridgeShowRewardAd;
