// Ecercício 03:
// 1. Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
const n1 = 7;
const n2 = 10;
const n3 = 15;

if (n1 >= n2 && n1 >= n3) {
    console.log("O maior número é " + n1);
} else if (n2 >= n1 && n2 >= n3) {
    console.log("O maior número é " + n2);
} else {
    console.log("O maior número é " + n3);
}
