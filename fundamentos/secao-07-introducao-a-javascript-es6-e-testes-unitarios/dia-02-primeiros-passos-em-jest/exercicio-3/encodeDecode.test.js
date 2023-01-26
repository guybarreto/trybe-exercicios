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
    test('encode is a function', () => {
        expect(encode).toBeDefined();
    });
    test('decode is a function', () => {
        expect(decode).toBeDefined();
    });
    test('a, e, i, o, u vowels are converted to 1, 2, 3, 4, 5', () => {
        expect(encode('aeiou')).toBe('12345');
    })
});