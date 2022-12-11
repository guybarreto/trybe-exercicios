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

const someArray1 = [2, 3, 6, 7, 10, 1];

const biggestValueIndex = (array) => {
    let biggest = null;
    for (let index = 0; index < array.length; index += 1) {
        if (biggest < array[index]) {
            biggest = array[index];
        }
    }
    return array.indexOf(biggest);
}
console.log(biggestValueIndex(someArray1)); // returns 4

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

const someArray2 = [2, 4, 6, 7, 10, 0, -3];

const smallestValueIndex = (array) => {
    let smallest = null;
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] < smallest) {
            smallest = array[index];
        }        
    }
    return array.indexOf(smallest);
}
console.log(smallestValueIndex(someArray2));

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

const someArray3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

const biggestName = (array) => {
    let biggest = '';
    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > biggest.length) {
            biggest = array[index];
        }
    }
    return biggest;
}
console.log(biggestName(someArray3)); // Fernanda
