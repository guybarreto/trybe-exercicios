// (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

const romanNumeralsTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanNumeralsToNumber = (romanNumerals) => {
  romanNumerals = romanNumerals.toUpperCase();
  let sum = 0;
  for (let index = 0; index < romanNumerals.length; index += 1) {
    const romanNumeral = romanNumerals[index];
    const nextRomanNumeral = romanNumerals[index + 1];
    const equivalentNumber = romanNumeralsTable[romanNumeral];
    const nextEquivalentNumber = romanNumeralsTable[nextRomanNumeral];

    if (nextEquivalentNumber != undefined) {
      if (equivalentNumber >= nextEquivalentNumber) {
        sum += equivalentNumber;
      } else {
        sum -= equivalentNumber;
      }
    } else {
      sum += equivalentNumber;
    }
  }
  return sum;
};
console.log(romanNumeralsToNumber('xliv')); // 44
console.log(romanNumeralsToNumber('XVII')); // 17
