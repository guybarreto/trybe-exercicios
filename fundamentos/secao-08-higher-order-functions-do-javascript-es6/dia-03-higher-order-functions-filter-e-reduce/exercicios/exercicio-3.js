// Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.
const books = require('./library-database');

const expectedResult = ['Fundação', 'Duna'];

const booksByAuthorBirthYear = (birthYear) =>
  books
    .filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);

const result = booksByAuthorBirthYear(1920);

console.log(result); // [ 'Fundação', 'Duna' ]
