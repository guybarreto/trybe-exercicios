// 1. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
// Exemplo:
// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
//      * Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

const longestWord = (phrase) => {
  const wordsArray = phrase.split(' ').sort();
  let longest = '';
  for (const word in wordsArray) {
    if (wordsArray[word].length > longest.length) {
      longest = wordsArray[word];
    }
  }
  return longest;
};
console.log(longestWord('Esse é um exemplo de frase'));

const longestWord2 = (phrase) =>
  phrase.split(' ').sort((word1, word2) => word2.length - word1.length)[0];

console.log(longestWord2('A palavra paralelepípedo tem sete sílabas'));
