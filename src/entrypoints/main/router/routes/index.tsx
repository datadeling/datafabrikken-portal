import React, { memo, FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../../../../components/error-page';
import routes from '../../../../routes';

const Routes: FC = () => (
  <Switch>
    {Object.keys(routes).map((path: string, index) => (
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

export default memo(Routes);
