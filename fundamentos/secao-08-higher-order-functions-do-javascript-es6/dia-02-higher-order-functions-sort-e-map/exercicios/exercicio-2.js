// Crie um array com strings no formato NOME_DA_PESSOA_AUTORA - DATA DE NASCIMENTO
const books = require('./library-database');

const expectedResult = [
    'George R. R. Martin - 1948',
    'J. R. R. Tolkien - 1892',
    'Isaac Asimov - 1920',
    'Frank Herbert - 1920',
    'Stephen King - 1947',
    'H. P. Lovecraft - 1890',
  ];
  
  const formatedAuthorNamesBirth = (booksArray) => booksArray.map((book) =>
   `${book.author.name} - ${book.author.birthYear}`)

  console.log(formatedAuthorNamesBirth(books)); /* output:
  [
  'George R. R. Martin - 1948',
  'J. R. R. Tolkien - 1892',
  'Isaac Asimov - 1920',
  'Frank Herbert - 1920',
  'Stephen King - 1947',
  'H. P. Lovecraft - 1890'
]
*/
