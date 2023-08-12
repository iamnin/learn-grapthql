const { books, authors } = require("../data/static");

const resolvers = {
  // QUERY
  Query: {
    books: () => books,
    book: (parent, args) =>
      books.find((book) => book.id.toString() === args.id),
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => author.id.toString() === args.id),
  },
  Book: {
    author: (parent) => {
      return authors.find((author) => author.id == parent.authorId);
    },
  },
  Author: {
    books: (parent, args) => {
      return books.filter((book) => book.authorId == parent.id);
    },
  },

  //   MUTATION
  Mutation: {
    createAuthor: (parent, args) => {
      return args;
    },
    createBook: (parent, args) => {
      return args;
    },
  },
};

module.exports = resolvers;
