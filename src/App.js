import React from "react";
import Home from "./containers/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "helpers/client";

// library CSS
import "antd/dist/antd.less";
import "./assets/fonts/style.css";
import "swiper/swiper.scss";

import GlobalStyle from "./global.style";

import RouterWrapper from "./RouterWrapper";

const App = () => (
  <React.Fragment>
    <ApolloProvider client={client}>
      <RouterWrapper />
    </ApolloProvider>
    <GlobalStyle />
  </React.Fragment>
);
export default App;
