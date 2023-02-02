const books = require('./library-database');

const expectedResult = 'Duna';
const smallerName = (booksArray) => {
  let nameBook;
  books.forEach(book => {
    if (nameBook === undefined) nameBook = book.name; 
    if (book.name.length < nameBook.length) nameBook = book.name;
  });
  return nameBook;
}
console.log(smallerName(books)); // Duna
