import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import Home from "containers/Home";
import AdminApp from "containers/admin";
import page404 from "containers/Page/404";

const PrivateRoute = ({
  component: WrapperComponent,
  isUser,
  isAdmin,
  ...rest
}) => {
  let comp = (props) => (
    <Redirect
      to={{
        pathname: "/",
        state: { from: props.location },
      }}
    />
  );
  const { path } = rest;
  if ((isUser && path === "/account") || (isAdmin && path === "/admin")) {
    comp = (props) => <WrapperComponent {...props} />;
  }
  return <Route {...rest} render={comp} />;
};

export default function RouterWrapper() {
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
        <Route component={page404} />
      </Switch>
    </Router>
  );
}
