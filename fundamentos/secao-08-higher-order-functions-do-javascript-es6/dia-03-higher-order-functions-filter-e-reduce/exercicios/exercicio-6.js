// Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.
const books = require('./library-database');

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = (booksArray) => {
  return booksArray.find(
    (book) =>
      book.author.name.split(' ')[0].endsWith('.') &&
      book.author.name.split(' ')[1].endsWith('.') &&
      book.author.name.split(' ')[2].endsWith('.')
  ).name;
};

console.log(authorWith3DotsOnName(books));
