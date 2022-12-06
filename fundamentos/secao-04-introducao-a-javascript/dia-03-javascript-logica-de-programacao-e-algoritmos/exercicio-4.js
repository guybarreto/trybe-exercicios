// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

const primersUntil = 50;
let primeNumbers = [];

for (index = 1; index <= primersUntil; index += 1) {
  let numberOfDivisors = null;
  for (index2 = 1; index2 <= primersUntil; index2 += 1) {
    if (index > 1 && index % index2 === 0) {
      numberOfDivisors += 1;
    }
  }
  if (numberOfDivisors === 2) {
    primeNumbers.push(index);
  }
  numberOfDivisors = 0;
}
let biggestPrimeNumber = primeNumbers[primeNumbers.length - 1];
console.log('Biggest prime number: ' + biggestPrimeNumber);