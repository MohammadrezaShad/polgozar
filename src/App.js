import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'helpers/client';
import { GlobalStore } from 'stores/globalStore';

// library CSS
import 'antd/dist/antd.less';
import './assets/fonts/style.css';
import 'swiper/swiper.scss';

import GlobalStyle from './global.style';

import RouterWrapper from './RouterWrapper';

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStore>
          <RouterWrapper />
        </GlobalStore>
      </ApolloProvider>
      <GlobalStyle />
    </>
  );
};
export default App;
