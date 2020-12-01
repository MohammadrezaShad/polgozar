import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import Home from 'containers/home';
import AdminPanel from 'containers/admin';
import AccountPanel from 'containers/account';
import page404 from 'containers/Page/404';
import UseGlobalSync from 'hooks/useStoreSync';
import { useLoggedInStateQuery, useUserRoleQuery } from 'graphql/types';
import MainLayout from 'components/mainLayout';
import SingleGroup from 'containers/singleGroup';
import SingleEvent from 'containers/singleEvent';

interface PrivateRouteProps extends RouteProps {
  component: React.FC<any>;
}

type RenderComponent = (props?: any) => React.ReactNode;
const PrivateRoute = ({ component: WrapperComponent, location, ...rest }: PrivateRouteProps) => {
  const useLoggedInStateQueryResult = useLoggedInStateQuery();
  const useUserRoleResult = useUserRoleQuery();

  const isUser = useLoggedInStateQueryResult.data?.loggedInState;
  const isAdmin = useUserRoleResult.data?.userRole === 'admin';
  let comp: RenderComponent = () => (
    <Redirect
      to={{
        pathname: '/',
        state: { from: location },
      }}
    />
  );
  const { path } = rest;
  if ((isUser && path === '/account') || (isAdmin && path === '/admin')) {
    comp = (props) => <WrapperComponent {...props} />;
  }
  return <Route {...rest} render={comp} />;
};

export default function RouterWrapper() {
  UseGlobalSync();
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/groups/:slug" component={SingleGroup} />
          <Route exact path="/events/:id" component={SingleEvent} />
          <PrivateRoute path="/account" component={AccountPanel} />
        </MainLayout>
        <PrivateRoute path="/admin" component={AdminPanel} />
        <Route component={page404} />
      </Switch>
    </Router>
  );
}
