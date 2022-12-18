// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

const isPair = (number) => number % 2 === 0;

const arrayOfNumbers = (vector) => {
  let pairNumbers = [];
  for (let index = 0; index < vector.length; index++) {
    for (let index2 = 0; index2 < vector[index].length; index2++) {
      const number = vector[index][index2];
      if (isPair(number)) {
        pairNumbers.push(number);
      }
    }
  }
  return pairNumbers;
};
console.log(arrayOfNumbers(vector)); // [ 2, 4, 6, 8, 10 ]
