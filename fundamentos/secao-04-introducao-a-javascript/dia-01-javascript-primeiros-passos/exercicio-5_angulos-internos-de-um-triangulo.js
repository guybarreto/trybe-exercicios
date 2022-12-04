// Exercício 05:
// 1. Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//      * Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//      * Um ângulo será considerado inválido se não tiver um valor positivo.

const angle1 = 90;
const angle2 = 40;
const angle3 = 50;
let isTriangle;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    console.log("Erro! Todos os ângulos devem possuir valor positivo.");
} else {
    if (angle1 + angle2 + angle3 === 180) {
        isTriangle = true;
        console.log(isTriangle);
    } else {
        isTriangle = false;
        console.log(isTriangle);
    }
}
