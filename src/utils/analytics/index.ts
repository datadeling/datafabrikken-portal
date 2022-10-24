import ReactGA from 'react-ga4';

import { GoogleAnalyticsTrackingId } from '../../types/enums';
import { PATHNAME } from '../../enums';

export const initAnalytics = () => {
  if (!ReactGA.isInitialized && typeof window !== 'undefined') {
    const isCommunity = window.location.pathname.includes(PATHNAME.COMMUNITY);

    const trackingIds = [GoogleAnalyticsTrackingId.DATAFABRIKKEN];
    if (isCommunity) {
      trackingIds.push(GoogleAnalyticsTrackingId.COMMUNITY);
    }

    if (trackingIds.length > 0) {
      try {
        ReactGA.initialize(
          trackingIds.map(trackingId => ({
            trackingId
          })),
          {
            testMode: window.location.hostname !== 'datafabrikken.norge.no',
            gaOptions: { anonymizeIp: true }
          }
        );
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  }
};

export const registerPageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page });
};

export const registerFilterSearchEvent = (
  filter_type: string,
  filter_value: string
) => {
  ReactGA.event('filter-search', {
    filter_type,
    filter_value
  });
};

export const registerTextSearchEvent = (text_value: string) => {
  ReactGA.event('text-search', {
    text_value
  });
};
