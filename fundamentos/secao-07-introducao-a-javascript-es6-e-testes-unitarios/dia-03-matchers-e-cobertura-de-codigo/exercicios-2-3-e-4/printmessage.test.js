const {printMessage, info} = require('./printMessage');

describe('Função printMessage', () => {
    test('O objeto passado como parâmetro possui a propriedade personagem', () => {
        expect(info).toHaveProperty('personagem');
    })
    test('A resposta contém "Boas vindas, " antes de chamar o nome', () => {
        expect(printMessage(info)).toMatch('Boas vindas, ');
    })
    test('A resposta contém o nome correto da personagem', () => {
        expect(printMessage(info)).toMatch(info.personagem);
    })
    test('A mensagem de erro é lançada quando a função é chamada com um objeto inválido', () => {
        expect(() => printMessage('Nao Sou Objeto')).toThrow('objeto inválido');
    })
})