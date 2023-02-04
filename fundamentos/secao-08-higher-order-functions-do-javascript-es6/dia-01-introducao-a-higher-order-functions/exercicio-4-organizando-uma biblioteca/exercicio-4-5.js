const books = require('./library-database');
const expectedResult = true;

const someBookWasReleaseOnThe80s = (booksArray) => {
  return booksArray.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
}

console.log(someBookWasReleaseOnThe80s(books)); //true