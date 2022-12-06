// Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

const n = 13;
let numberOfLines;
let array = [];

if (n % 2 === 0) {
    numberOfLines = n / 2;
    for (let indexLines = 0; indexLines < numberOfLines; indexLines += 1) {
        array[(n / 2) - indexLines] = '*';
        array[((n / 2) + 1) + indexLines] = '*';
        array.fill(' ', 0, (n / 2) - indexLines);
        console.log(array.join(''));
    }
} else {
    numberOfLines = (n / 2) + 0.5;
    for (let indexLines = 0; indexLines < numberOfLines; indexLines += 1) {
        array[((n / 2) + 0.5) - indexLines] = '*';
        if (indexLines > 0) {array[((n / 2) + 1.5) + indexLines] = '*';}
        array.fill(' ', 0, ((n / 2) + 0.5) - indexLines);
        console.log(array.join(''));
    }
}