// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowestNumber = numbers[0];

for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] < lowestNumber) {
        lowestNumber = numbers[index];
    }
}
console.log('Lowest number: ' + lowestNumber);