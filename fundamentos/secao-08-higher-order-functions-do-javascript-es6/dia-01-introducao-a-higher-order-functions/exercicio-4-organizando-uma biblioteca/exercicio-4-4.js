const books = require('./library-database');

const expectedResult = false;

function everyoneWasBornOnSecXX(booksArray) {
  return booksArray.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000)
  }

console.log(everyoneWasBornOnSecXX(books)); // false
