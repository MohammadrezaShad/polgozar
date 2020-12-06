import { ApolloClient, from } from '@apollo/client';
import { cache } from 'cache';
import { createUploadLink } from 'apollo-upload-client';
import { authLink, errorLink } from './links';
import typeDefs from '../client-schema';

const link = from([
  authLink,
  errorLink,
  createUploadLink({ uri: `${process.env.REACT_APP_API_BASE_URL}/graphql` }) as any,
]);

export default new ApolloClient({
  link,
  cache,
  typeDefs,
});
