// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

const n = 7;
let array = [];

for (let index = 0; index < n; index += 1) {
    array.push('*');
    console.log(array.join(''));
}