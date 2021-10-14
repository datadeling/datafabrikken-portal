import { FC, memo, useEffect } from 'react';
import { useLocation } from 'react-router';
import { compose } from 'redux';
import ReactGA from 'react-ga4';

import { GoogleAnalyticsTrackingId } from '../../types/enums';
import { PATHNAME } from '../../enums';

const Analytics: FC = () => {
  const { pathname, search } = useLocation();
  const { hostname } = location;

  const isDatafabrikken = ['datafabrikken.norge.no'].includes(hostname);
  const isCommunity = [`${PATHNAME.COMMUNITY}`].includes(pathname);

  const configureAnalytics = () => {
    const trackingIds = [];
    if (isDatafabrikken) {
      trackingIds.push(GoogleAnalyticsTrackingId.DATAFABRIKKEN);
    }
    if (isCommunity) {
      trackingIds.push(GoogleAnalyticsTrackingId.COMMUNITY);
    }

    if (trackingIds.length > 0) {
      ReactGA.initialize(
        trackingIds.map(trackingId => ({
          trackingId
        })),
        { gaOptions: { anonymizeIp: true } }
      );
    }
  };

  const registerPageView = () => {
    if (isDatafabrikken) {
      const page = `${pathname}${search}`;
      ReactGA.set({ page });
      ReactGA.send({ hitType: 'pageview', page });
    }
  };

  useEffect(() => {
    configureAnalytics();
    setTimeout(registerPageView, 1000);
  }, [pathname, search]);

  return null;
};

export default compose<FC>(memo)(Analytics);
