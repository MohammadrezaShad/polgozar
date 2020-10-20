import React from "react";
import GlobalStyle from "./global.style";
import "./assets/fonts/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "helpers/client";
import "antd/dist/antd.less";

const App = () => (
  <div id="appRoot">
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  </div>
);
export default App;
