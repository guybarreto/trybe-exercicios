// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

let number = 39;
let primeNumbers = [];

for (index = 1; index <= number; index += 1) {
  let numberOfDivisors = null;
  for (index2 = 1; index2 <= number; index2 += 1) {
    if (index > 1 && index % index2 === 0) {
      numberOfDivisors += 1;
    }
  }
  if (numberOfDivisors === 2) {
    primeNumbers.push(index);
  }
  numberOfDivisors = 0;
}
if (primeNumbers.includes(number)) {
    console.log(number + ' is a prime number');
} else {
    console.log(number + ' is NOT a prime number');
}