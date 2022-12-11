// 1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

const palindromeCheck = (word) => word === word.split('').reverse().join('');
console.log(palindromeCheck('arara'));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];
// Valor esperado no retorno da função: 4.

let array2 = [2, 3, 6, 7, 10, 1];

const biggestValueIndex = (array) => {
    let biggest = null;
    for (let index = 0; index < array.length; index++) {
        if (biggest < array[index]) {
            biggest = array[index];
        }
    }
    return array.indexOf(biggest);
}
console.log(biggestValueIndex(array2));

