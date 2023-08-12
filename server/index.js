const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// Load schema & resolvers

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

let server = null;

const app = express();

const startGraphq = async () => {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
};

startGraphq();

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
