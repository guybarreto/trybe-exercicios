// Exercício 08:
// 1. Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//      * Bonus: use somente um if.

const n1 = 7;
const n2 = 1;
const n3 = 4;

let thereIsEven = false;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    thereIsEven = true;
}
console.log(thereIsEven);