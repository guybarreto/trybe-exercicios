/*
Para as funções encode e decode, crie os seguintes testes em Jest:
    1. Teste se encode e decode são funções;
    2. Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
    3. Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
    4. Teste se as demais letras/números não são convertidos para cada caso;
    5. Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
*/
const {encode, decode} = require('./encodeDecode');

describe('encodeDecode function', () => {
    const consonants = 'b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, y, w, z';
    const numbers = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9';
    test('encode is defined', () => {
        expect(encode).toBeDefined();
    });
    test('encode is a function', () => {
        expect(typeof(encode)).toBe('function');
    })
    test('decode defined', () => {
        expect(decode).toBeDefined();
    });
    test('decode is a function', () => {
        expect(typeof(decode)).toBe('function');
    })
    test('a, e, i, o, u vowels are converted to 1, 2, 3, 4, 5 numbers', () => {
        expect(encode('aeiou')).toBe('12345');
    })
    test('1, 2, 3, 4, 5 numbers are converted to a, e, i, o, u vowels', () => {
        expect(decode('12345')).toBe('aeiou');
    })
    test('consonants are not encoded', () => {
        expect(encode(consonants)).toBe(consonants);
    })
    test('numbers are not encoded', () => {
        expect(encode(numbers)).toBe(numbers);
    })
    test('consonants are not decoded', () => {
        expect(decode(consonants)).toBe(consonants);
    })
    test('6 to 9 are not decoded', () => {
        expect(decode('6789')).toBe('6789');
    })
    test('encoded string have same length as the parameter string', () => {
        expect(encode('testing').length).toBe(7);
    })
    test('decoded string have same length as the parameter string', () => {
        expect(decode('t2st3ng').length).toBe(7);
    })
});