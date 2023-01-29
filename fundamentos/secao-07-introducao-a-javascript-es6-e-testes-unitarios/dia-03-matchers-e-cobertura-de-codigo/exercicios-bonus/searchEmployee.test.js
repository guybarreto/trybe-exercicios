const {searchEmployee, professionalBoard} = require('./searchEmployee');

describe('Função searchEmployee', () => {
    test('Verifica se a função searchEmployee existe', () => {
        expect(searchEmployee).toBeDefined();
    })
    test('Verifica se a função searchEmployee é uma função', () => {
        expect(typeof(searchEmployee)).toBe('function');
    })
    test('A função retorna os resultados da busca para o id informado como parâmetro da função', () => {
        expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    })
    test('Caso o id não conste no quadro de funcionários, a função deve retornar o erro "ID não identificada"', () => {
        expect(() => searchEmployee('123456', 'lastName')).toThrow('ID não identificada');
    })
})