import { ApolloServer } from 'apollo-server-lambda';

import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
    }),
    introspection: true,
    playground: true
});

export const graphqlHandler = apolloServer.createHandler();
