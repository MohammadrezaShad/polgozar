import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import page404 from 'containers/Page/404';
import Profile from './profile';
import CreateGroup from './createGroup';

const routes = [
  {
    path: 'profile',
    component: Profile,
    exact: true,
  },
  {
    path: 'events',
    component: () => {
      return <div />;
    },
    exact: true,
  },
  {
    path: 'groups',
    component: () => {
      return <div />;
    },
    exact: true,
  },
  {
    path: 'groups/create',
    component: CreateGroup,
    exact: true,
  },
];

interface AccountRouterProps {
  url: string;
}

const AccountRouter = ({ url }: AccountRouterProps) => {
  return (
    <Switch>
      <Redirect exact from="/account" to="account/profile" />
      {routes.map((singleRoute) => {
        const { path, exact, ...otherProps } = singleRoute;
        return <Route exact={!!exact} key={path} path={`${url}/${path}`} {...otherProps} />;
      })}
      <Route
        component={page404} // if no page matched
      />
    </Switch>
  );
};

export default AccountRouter;
