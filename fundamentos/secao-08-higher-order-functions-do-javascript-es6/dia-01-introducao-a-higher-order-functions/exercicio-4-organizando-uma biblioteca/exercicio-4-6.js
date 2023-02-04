const books = require('./library-database');
const expectedResult = false;

const authorUnique = (booksArray) => booksArray.sort((a, b) =>
    a.author.birthYear - b.author.birthYear).every((book, index) =>
        {
            const nextBook = booksArray[index + 1];
            let notSameAuthor;
            // we need to check if nextBook exists, or the last nextBook.author.name will be undefined:
            if (nextBook) notSameAuthor = book.author.name !== nextBook.author.name; 
            return (nextBook && notSameAuthor ? book.author.birthYear !== nextBook.author.birthYear : true);
        })
  
console.log(authorUnique(books)); // false
