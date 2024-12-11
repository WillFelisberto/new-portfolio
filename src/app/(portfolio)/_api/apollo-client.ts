import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: true, // Habilita o modo SSR
    link: new HttpLink({
      uri: process.env.GRAPHQL_API_URL, // URL da API GraphQL
      credentials: 'same-origin', // Ajuste conforme necessário
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
