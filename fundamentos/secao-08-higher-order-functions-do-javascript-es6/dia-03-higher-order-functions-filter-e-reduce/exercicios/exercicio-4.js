// Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
const books = require('./library-database');

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];

const fantasyOrScienceFictionAuthors = (booksArray) => {
  return booksArray
    .filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map((book) => book.author.name)
    .sort();
}

console.log(fantasyOrScienceFictionAuthors(books)); /* output:
[
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]
*/
