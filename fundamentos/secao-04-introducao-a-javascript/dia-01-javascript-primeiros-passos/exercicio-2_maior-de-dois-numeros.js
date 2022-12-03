// Exercício 02:
// 1. Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
const n1 = 7;
const n2 = 5;

if (n1 > n2) {
    console.log("n1 (" + n1 + ") é maior do que n2 (" + n2 + ")");
} else if (n2 > n1) {
    console.log("n2 (" + n2 + ") é maior do que n1 (" + n1 + ")");
} else {
    console.log("n1 (" + n1 + ") e n2 (" + n2 + ") são iguais");
}