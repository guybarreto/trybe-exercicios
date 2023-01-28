const {printMessage, info} = require('./printMessage');

describe('Função printMessage', () => {
    test('O objeto passado como parâmetro possui a propriedade personagem', () => {
        expect(info).toHaveProperty('personagem');
    })
})