import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
	uri: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:8030/app2/query',
	cache: new InMemoryCache()
});

export default client;
