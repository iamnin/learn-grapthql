const Book = require('../model/Book')
const Author = require('../model/Author')

const mongoDataMethods = {
    getAllBooks: async (condition) => condition === null ? await Book.find() : await Book.find(condition),
    getBookById: async (id) => await Book.findById(id),
    createAuthor: async args => {
        const newAuthor = new Author(args)
        return await newAuthor.save()
    },
    createBook: async args => {
        const newBook = new Book(args)
        return await newBook.save()
    },
    getAllAuthors: async () => await Author.find(),
    getAuthorById: async (id) => await Author.findById(id),
}

module.exports = mongoDataMethods