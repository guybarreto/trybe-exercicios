// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
// Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

const n = 6;
let array = [];

for (let index = 0; index < n; index += 1) {
    array.push('*');
}

for (let index = 0; index < n; index += 1) {
    console.log(array.join(''));
}