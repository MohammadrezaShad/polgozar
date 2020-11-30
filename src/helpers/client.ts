import { ApolloClient, from, HttpLink } from '@apollo/client';
import { cache } from 'cache';
import { authLink, errorLink } from './links';
import typeDefs from '../client-schema';

const link = from([authLink, errorLink, new HttpLink({ uri: `${process.env.REACT_APP_API_BASE_URL}/graphql` })]);

export default new ApolloClient({
  link,
  cache,
  typeDefs,
});
