// 1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

const palindromeCheck = (word) => word === word.split('').reverse().join('');
console.log(palindromeCheck('arara'));

