import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import page404 from 'containers/Page/404';
import Groups from './manageGroups';
import Events from './manageEvents';
import Users from './manageUsers';

const routes = [
  {
    path: 'users',
    component: Users,
    exact: true,
  },
  {
    path: 'groups',
    component: Groups,
    exact: true,
  },
  {
    path: 'events',
    component: Events,
    exact: true,
  },
];

interface AdminRouterProps {
  url: string;
}

const AdminRouter = ({ url }: AdminRouterProps) => {
  return (
    <Switch>
      <Redirect exact from="/admin" to="admin/users" />
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

export default AdminRouter;
