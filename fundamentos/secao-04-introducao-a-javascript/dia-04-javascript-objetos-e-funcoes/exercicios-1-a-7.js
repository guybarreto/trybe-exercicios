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

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

const someArray4 = [2, 3, 2, 5, 8, 2, 3];

function maisRepetidos(array) {
let repeated = {};

for (let index = 0; index < array.length; index += 1) {
    if (repeated[array[index]] === undefined) {
        repeated[array[index]] = 1;
    } else {
        repeated[array[index]] = repeated[array[index]] + 1;
    }
}

let contRepetido = 0;
let contNumero = 0;

for (const key in repeated) {
    if (contRepetido < repeated[key]) {
        contRepetido = repeated[key];
        contNumero = key;
    }
}
return contNumero;
}
console.log(maisRepetidos(someArray4)); // returns 2

