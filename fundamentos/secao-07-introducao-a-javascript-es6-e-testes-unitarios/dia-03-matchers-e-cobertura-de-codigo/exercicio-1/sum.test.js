const sum = require('./sum');

describe('A função sum', () => {
    test('O retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
})