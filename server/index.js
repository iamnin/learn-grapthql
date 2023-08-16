const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

// Load schema & resolvers

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const mongoDataMethods = require("./data/db"); 

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ngocnguyenich:UoLBB2kMRvN6dsID@cluster0.swtt0la.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("Mongodb Connected")
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

let server = null;

const app = express();

const startGraphq = async () => {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({mongoDataMethods})
  });
  await server.start();
  server.applyMiddleware({ app });
};

startGraphq();
connectDB()

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
