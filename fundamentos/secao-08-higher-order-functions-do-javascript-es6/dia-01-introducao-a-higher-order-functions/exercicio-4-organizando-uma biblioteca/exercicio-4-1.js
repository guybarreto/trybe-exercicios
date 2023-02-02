const books = require('../exercicio-4-organizando-uma biblioteca/library-database')

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947);
console.log(authorBornIn1947());
/* output:
{
  id: 5,
  name: 'A Coisa',
  genre: 'Terror',
  author: { name: 'Stephen King', birthYear: 1947 },
  releaseYear: 1986
} 
*/