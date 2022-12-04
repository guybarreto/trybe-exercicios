// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index1 = 1; index1 < numbers.length; index1++) {
    for (let index2 = 0; index2 < index1; index2++) {
        if (numbers[index1] < numbers[index2]) {
            let holdElement = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = holdElement;
            console.log(numbers);
        }
    }
}
console.log('numbers: [' + numbers.join(', ') + ']');