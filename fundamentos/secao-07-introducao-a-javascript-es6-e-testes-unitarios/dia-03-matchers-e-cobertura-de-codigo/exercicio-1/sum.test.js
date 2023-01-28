const sum = require('./sum');

describe('A função sum', () => {
    test('O retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    test('O retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    test('Lança um erro quando os parâmetros são number 4 e string "5"', () => {
        expect(() => sum(4, '5')).toThrow();
    })
})