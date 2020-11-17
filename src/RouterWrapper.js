import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from 'containers/home';
import AdminApp from 'containers/admin';
import page404 from 'containers/Page/404';
import UseGlobalSync from 'hooks/useStoreSync';
import { useGlobalStore } from 'stores/globalStore';

const PrivateRoute = ({ component: WrapperComponent, location, ...rest }) => {
  const { state } = useGlobalStore();
  const isUser = state.isLoggedIn;
  const isAdmin = state.userRole === 'admin';
  let comp = () => (
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Home />
        </Route>
        <PrivateRoute path="/admin" component={AdminApp} />
        <PrivateRoute path="/account" component={AdminApp} />
        <Route component={page404} />
      </Switch>
    </Router>
  );
}
