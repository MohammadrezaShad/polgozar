import { ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

export const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({
    headers: {
      authorization: 'Bearer 123', // however you get your token
      ...headers,
    },
  }))
  return forward(operation)
})

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})
