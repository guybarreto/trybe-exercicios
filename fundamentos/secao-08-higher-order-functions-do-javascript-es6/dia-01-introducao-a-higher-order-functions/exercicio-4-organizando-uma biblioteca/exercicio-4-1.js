const books = require('../exercicio-4-organizando-uma biblioteca/library-database')

const expectedResult = 'Stephen King';
const authorBornIn1947 = (booksArray) => booksArray.find((book) => book.author.birthYear === 1947).author.name;
console.log(authorBornIn1947(books)); // Stephen King
