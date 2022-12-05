// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let numbersDividedBy2 =[];

for (let index = 0; index < numbers.length; index++) {
    numbersDividedBy2.push(numbers[index] / 2);
}
console.log('numbersDividedBy2: [' + numbersDividedBy2.join(', ') + ']');