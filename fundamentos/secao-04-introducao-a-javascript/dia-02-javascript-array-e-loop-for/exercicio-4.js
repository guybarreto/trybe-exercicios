// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];    
}

const average = sum / numbers.length;

if (average > 20) {
    console.log('Average: ' + average.toFixed(2) + ", valor maior que 20");
} else {
    console.log('Average: ' + average.toFixed(2) + ", valor menor ou igual a 20");
}