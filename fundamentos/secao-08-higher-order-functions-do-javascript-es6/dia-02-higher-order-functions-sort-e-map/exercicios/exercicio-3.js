/* Construa um array de objetos a partir do array de livros.
Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha. */
const books = require('./library-database');

const expectedResult = [
    {
      author: 'Isaac Asimov',
      age: 31,
    },
    {
      author: 'H. P. Lovecraft',
      age: 38,
    },
    {
      author: 'Stephen King',
      age: 39,
    },
    {
      author: 'George R. R. Martin',
      age: 43,
    },
    {
      author: 'Frank Herbert',
      age: 45,
    },
    {
      author: 'J. R. R. Tolkien',
      age: 62,
    },
];
  
  const nameAndAge = (booksArray) => booksArray.map((book) =>
   ({author: book.author.name, age: (book.releaseYear - book.author.birthYear)})).sort((a, b) =>
    a.age - b.age);

console.log(nameAndAge(books)); /* output:
[
  { author: 'Isaac Asimov', age: 31 },
  { author: 'H. P. Lovecraft', age: 38 },
  { author: 'Stephen King', age: 39 },
  { author: 'George R. R. Martin', age: 43 },
  { author: 'Frank Herbert', age: 45 },
  { author: 'J. R. R. Tolkien', age: 62 }
]
*/
