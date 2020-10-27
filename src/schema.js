"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
exports.typeDefs = apollo_server_lambda_1.gql `
    type Query {
        """
        A test message.
        """
        testMessage: String!
    }
`;
//# sourceMappingURL=schema.js.map