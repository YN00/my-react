import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const setAuthorizationLink = setContext((request, previousContext) => ({
  headers: {},
}));

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       feed: {
    //         read(existing, { args: { offset, limit } }) {
    //           return existing && existing.slice(offset, offset + limit);
    //         },
    //       },
    //     },
    //   },
    // },
  }),
});

export default client;
