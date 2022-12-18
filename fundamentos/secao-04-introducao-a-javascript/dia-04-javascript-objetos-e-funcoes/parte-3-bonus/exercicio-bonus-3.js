// A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  'Melancia',
  'Abacate',
  'Melancia',
  'Melancia',
  'Uva',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Uva',
  'Laranja',
  'Melancia',
  'Banana',
  'Uva',
  'Pera',
  'Abacate',
  'Laranja',
  'Abacate',
  'Banana',
  'Melancia',
  'Laranja',
  'Laranja',
  'Jaca',
  'Uva',
  'Banana',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Uva',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Melancia',
  'Melancia',
  'Laranja',
  'Pera',
  'Banana',
  'Jaca',
  'Laranja',
  'Melancia',
  'Abacate',
  'Abacate',
  'Pera',
  'Melancia',
  'Banana',
  'Banana',
  'Abacate',
  'Uva',
  'Laranja',
  'Banana',
  'Abacate',
  'Uva',
  'Uva',
  'Abacate',
  'Abacate',
  'Melancia',
  'Uva',
  'Jaca',
  'Uva',
  'Banana',
  'Abacate',
  'Banana',
  'Uva',
  'Banana',
  'Laranja',
  'Laranja',
  'Jaca',
  'Jaca',
  'Abacate',
  'Jaca',
  'Laranja',
  'Melancia',
  'Pera',
  'Jaca',
  'Melancia',
  'Uva',
  'Abacate',
  'Jaca',
  'Jaca',
  'Abacate',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Jaca',
  'Pera',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Jaca',
  'Banana',
  'Laranja',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Uva',
];

const fruitsObject = {};

const fruitsList = (array) => {
  for (let index = 0; index < array.length; index++) {
    const fruit = array[index];
    if (fruitsObject[fruit] === undefined) {
      fruitsObject[fruit] = 1;
    } else {
      fruitsObject[fruit] += 1;
    }
  }
  return fruitsObject;
};

console.log(fruitsList(basket)); // {Melancia: 16, Abacate: 15, Uva: 15, Laranja: 15, Jaca: 15, Pera: 11, Banana: 13}

const fruitsArray = [];

for (const key in fruitsObject) {
  const amount = fruitsObject[key];
  fruitsArray.push(`${amount} ${key}s`);
}

console.log(`Sua cesta possui: ${fruitsArray.join(', ')}.`); // Sua cesta possui: 16 Melancias, 15 Abacates, 15 Uvas, 15 Laranjas, 15 Jacas, 11 Peras, 13 Bananas.
