"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const resolvers_1 = require("./resolvers");
const schema_1 = require("./schema");
const apolloServer = new apollo_server_lambda_1.ApolloServer({
    resolvers: resolvers_1.resolvers,
    typeDefs: schema_1.typeDefs,
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
    }),
    introspection: true,
    playground: true
});
exports.graphqlHandler = apolloServer.createHandler();
//# sourceMappingURL=server.js.map