import React from "react";
import GlobalStyle from "./global.style";
import "./assets/fonts/style.css";
import Home from "./containers/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "helpers/client";
import "antd/dist/antd.less";
import RouterWrapper from "./RouterWrapper";

const App = () => (
  <div id="appRoot">
    <ApolloProvider client={client}>
      <GlobalStyle />
      <RouterWrapper />
    </ApolloProvider>
  </div>
);
export default App;
