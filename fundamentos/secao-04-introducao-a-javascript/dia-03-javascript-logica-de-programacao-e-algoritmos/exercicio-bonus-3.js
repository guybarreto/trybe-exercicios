// Agora inverta o lado do triângulo. Por exemplo:
 
// n = 5

//     *
//    **
//   ***
//  ****
// *****

const n = 5;
let array = [];

for (let index = 0; index < n; index += 1) {
    array[n - index] = '*';
    array.fill(' ', 0, n - index);
    console.log(array.join(''));
}