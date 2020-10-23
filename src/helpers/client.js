import { ApolloClient, InMemoryCache } from "@apollo/client";
import { from, HttpLink } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { authLink, errorLink } from "./links";

const link = from([
  authLink,
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_API_BASE_URL + "/graphql" }),
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
