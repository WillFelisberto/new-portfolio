import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: true, // Habilita o modo SSR
    link: new HttpLink({
      uri: process.env.GRAPHQL_API_URL || 'http://127.0.0.1:3000/api/graphql', // URL da API GraphQL
      credentials: '',
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
