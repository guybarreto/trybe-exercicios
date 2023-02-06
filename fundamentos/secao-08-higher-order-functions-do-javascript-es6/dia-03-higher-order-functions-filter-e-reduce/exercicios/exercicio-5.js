// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const books = require('./library-database');

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
];

const oldBooks = (booksArray) =>
  booksArray
    .filter((book) => new Date().getFullYear() - book.releaseYear > 60)
    .map((book) => book.name);

console.log(oldBooks(books)); // [ 'O Senhor dos Anéis', 'Fundação', 'O Chamado de Cthulhu' ]
