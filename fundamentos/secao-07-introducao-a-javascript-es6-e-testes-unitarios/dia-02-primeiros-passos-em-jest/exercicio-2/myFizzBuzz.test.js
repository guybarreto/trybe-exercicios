/*
A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false.
    1. Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.
    2. Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.
    3. Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.
    4. Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
    5. Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.
*/
const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz function', () => {
    test('myFizzBuzz(15) returns fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('myFizzBuzz(3) returns fizz', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });
    test('myFizzBuzz(5) returns buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    test('myFizzBuzz(7) returns 7', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    test('myFizzBuzz("m") returns false', () => {
        expect(myFizzBuzz("m")).toBe(false);
    })
});