// Ecercício 03:
// 1. Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
const n1 = 3;
const n2 = 8;
const n3 = 12;

if (n1 > n2 && n1 > n3) {
    console.log("O maior número é n1 (" + n1 + ")");
} else if (n2 >= n1 && n2 > n3) {
    if (n2 === n1 && n2 > n3) {
        console.log("n1 e n2 possuem o mesmo valor: " + n2 + ", que é o maior número");
    } else {
    console.log("O maior número é n2 (" + n2 + ")");
    }
} else if (n3 >= n1 && n3 > n2) {
    if (n3 === n1 && n3 > n2) {
        console.log("n1 e n3 possuem o mesmo valor: " + n3 + ", que é o maior número");
    } else {
    console.log("O maior número é n3 (" + n3 + ")");
    }
} else if (n3 === n2 && n3 > n1) {
    console.log("n2 e n3 possuem o mesmo valor: " + n3 + ", que é o maior número");
} else {
    console.log("n1, n2 e n3 possuem o mesmo valor: " + n3);
}
