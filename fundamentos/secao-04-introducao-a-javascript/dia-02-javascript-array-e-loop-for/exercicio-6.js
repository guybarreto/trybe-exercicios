// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        oddNumbers += 1;
    }
}
if (oddNumbers > 0) {
    console.log('Number of odd numbers: ' + oddNumbers);
} else {
    console.log('Nenhum valor ímpar encontrado');
}