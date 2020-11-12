import { ApolloLink, Observable } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { AUTH_TOKEN } from 'constant';
import LocalStore from 'store';
import { refreshToken } from 'services/auth';

export const authLink = new ApolloLink((operation, forward) => {
  const token = LocalStore.get(AUTH_TOKEN) || process.env.REACT_APP_API_GENERIC_TOKEN;
  operation.setContext(({ headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }));
  return forward(operation);
});

export const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    const token = LocalStore.get(AUTH_TOKEN);
    const isTokenExpired = token && graphQLErrors.some(({ code, status }) => code === 401 || status === 'unuthorized');
    if (isTokenExpired) {
      return new Observable((observer) => {
        refreshToken()
          .then((newToken) => {
            operation.setContext(({ headers = {} }) => ({
              headers: {
                ...headers,
                authorization: `Bearer ${newToken}` || null,
              },
            }));
          })
          .then(() => {
            const subscriber = {
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            };
            // Retry last failed request
            forward(operation).subscribe(subscriber);
          })
          .catch((error) => {
            // No refresh or client token available, we force user to login
            observer.error(error);
          });
      });
    }
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
  return null;
});
