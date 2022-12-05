// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let biggestWord = '';
let biggestWordLength = 0;

let smallestWord = '';
let smallestWordLength = Infinity;

for (index = 0; index < array.length; index += 1) {
    if (biggestWordLength < array[index].length) {
        biggestWordLength = array[index].length;
        biggestWord = array[index];
    }
    if (smallestWordLength > array[index].length) {
        smallestWordLength = array[index].length;
        smallestWord = array[index];
    }
}
console.log('Biggest word: ' + biggestWord + ' (' + biggestWordLength + ' characters)');
console.log('Smallest word: ' + smallestWord + ' (' + smallestWordLength + ' characters)');