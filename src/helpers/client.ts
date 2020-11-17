import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';

import { authLink, errorLink } from './links';

const link = from([authLink, errorLink, new HttpLink({ uri: `${process.env.REACT_APP_API_BASE_URL}/graphql` })]);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
