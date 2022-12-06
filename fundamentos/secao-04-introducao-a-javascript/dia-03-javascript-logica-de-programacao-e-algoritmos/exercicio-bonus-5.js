// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

const n = 15;
let numberOfLines;
let array = [];

numberOfLines = (n / 2) + 0.5;
for (let indexLines = 0; indexLines < numberOfLines; indexLines += 1) {
    array[((n / 2) + 0.5) - indexLines] = '*';
    if (indexLines > 0 && indexLines < numberOfLines - 1) {
        array[((n / 2) + 0.5) + indexLines] = '*';
        array.fill(' ', (n / 2) + 0.5, ((n / 2) + 0.5) + indexLines);
        array.fill(' ', (n / 2) + 1.5 - indexLines, (n / 2) + 0.5);
    } else {
        array[((n / 2) + 0.5) + indexLines] = '*';
        array.fill('*', 0, ((n / 2) + 0.5) + indexLines + 1);
    }
    array.fill(' ', 0, ((n / 2) + 0.5) - indexLines);
    console.log(array.join(''));
}