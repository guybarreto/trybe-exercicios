// 1. Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

const pessoa = {
  nome: 'Henri',
  idade: 20,
};
// pessoa = {
//   nome: 'Luna',
//   idade: 19,
// };

// Abaixo a solução para alterar apenas as propriedades da variável const
pessoa.nome = 'Luna';
pessoa.idade = 19;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);
