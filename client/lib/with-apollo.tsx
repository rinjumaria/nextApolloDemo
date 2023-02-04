import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { withData} from '@apollo/client';

const client = new ApolloClient({
    uri: "https://faker-graphql.vercel.app/api/graphql",
    cache: new InMemoryCache(),
});

export default client;