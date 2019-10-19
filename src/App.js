import React from 'react';
import AppStyle from './App.style';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import theme from './settings/theme';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <AppStyle id="appRoot">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AppStyle>
    </ThemeProvider>
  </div>
);
export default App;
