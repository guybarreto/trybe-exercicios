// Exercício 09:
// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//     * Bonus: use somente um if.

const n1 = 8;
const n2 = 2;
const n3 = 5;

let thereIsOdd = false;

if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
    thereIsOdd = true;
}
console.log(thereIsOdd);
