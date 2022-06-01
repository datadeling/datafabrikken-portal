import React, { memo, FC, lazy, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ErrorPage from '../../../../components/error-page';
import routes from '../../../../routes';
import { registerPageView } from '../../../../utils/analytics';

const Routes: FC = () => {
  const location = useLocation();

  useEffect(() => {
    registerPageView(location.pathname);
  }, [location.pathname]);

  return (
    <Switch>
      {Object.keys(routes)
        .filter((path: string) => !!routes[path])
        .map((path: string, index) => (
          <Route
            key={`${path}-${index}`}
            exact
            path={path}
            component={lazy(() => import(`../pages/${routes[path]}`))}
          />
        ))}
      <Route render={() => <ErrorPage errorCode='404' />} />
    </Switch>
  );
};

export default memo(Routes);
