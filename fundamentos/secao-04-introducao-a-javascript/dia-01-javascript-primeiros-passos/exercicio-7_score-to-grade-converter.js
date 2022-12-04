// Exercício 07:
// 1. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//     *Porcentagem >= 90 -> A
//     *Porcentagem >= 80 -> B
//     *Porcentagem >= 70 -> C
//     *Porcentagem >= 60 -> D
//     *Porcentagem >= 50 -> E
//     *Porcentagem < 50 -> F
// 2. O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const score = 40;
let grade;

if (score >= 0 && score <= 100) {
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else if (score >= 50) {
        grade = "E";
    } else {
        grade = "F";
    }
} else {
    console.log("Error! invalid score. / Erro! Nota inválida.");
}

console.log(grade);