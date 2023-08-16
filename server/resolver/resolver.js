const { books, authors } = require("../data/static");
const Author = require("../model/Author");
const Book = require("../model/Book");

const resolvers = {
  // QUERY
  Query: {
    books: async (parent, args, context) => {
      return await context.mongoDataMethods.getAllBooks()
    },
    book: async (parent, {id}, {mongoDataMethods}) => await mongoDataMethods.getBookById(id),
    authors: async () => await mongoDataMethods.getAllAuthors(),
    author: async (parent, {id}, {mongoDataMethods}) => await mongoDataMethods.getAuthorById(id)
  },
  Book: {
    author: async ({authorId}, parent, {mongoDataMethods}) => await mongoDataMethods.getAuthorById(authorId)
  },
  Author: {
    books: async ({id}, parent, {mongoDataMethods}) => await mongoDataMethods.getAllBooks({authorId: id})
  },

  //   MUTATION
  Mutation: {
    createAuthor: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createBook(args),
  },
};

module.exports = resolvers;
