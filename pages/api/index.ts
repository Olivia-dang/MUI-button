import type { NextApiRequest, NextApiResponse } from 'next'

import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!';
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.start().then(() => {
  return apolloServer.createHandler({ path: '/api' });  // highlight-line
});