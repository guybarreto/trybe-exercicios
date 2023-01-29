const {searchEmployee, professionalBoard} = require('./searchEmployee');

describe('Função searchEmployee', () => {
    test('Verifica se a função searchEmployee existe', () => {
        expect(searchEmployee).toBeDefined();
    })
    test('Verifica se a função searchEmployee é uma função', () => {
        expect(typeof(searchEmployee)).toBe('function');
    })
})