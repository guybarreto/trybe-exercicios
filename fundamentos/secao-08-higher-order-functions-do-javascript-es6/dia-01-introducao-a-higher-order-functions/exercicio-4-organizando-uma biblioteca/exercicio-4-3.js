const books = require('./library-database');

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  };
  
  const getNamedBook = (booksArray) => booksArray.find((book) => book.name.length === 26);

  console.log(getNamedBook(books));
/* Output:
{
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: { name: 'George R. R. Martin', birthYear: 1948 },
  releaseYear: 1991
}
*/