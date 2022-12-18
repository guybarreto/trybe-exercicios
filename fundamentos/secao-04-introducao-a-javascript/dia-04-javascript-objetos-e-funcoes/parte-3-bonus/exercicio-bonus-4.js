// Usando o objeto abaixo, faça o que for pedido a seguir:

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// 1. Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2, de nome Zoey Brooks, mora no 1° andar, apartamento 101.”.

let blocoDoisResidents = moradores.blocoDois;
let lastBlocoDoisResident = blocoDoisResidents[blocoDoisResidents.length - 1];
console.log(
  `O morador do bloco 2, de nome ${lastBlocoDoisResident.nome} ${lastBlocoDoisResident.sobrenome}, mora no ${lastBlocoDoisResident.andar} andar, apartamento ${lastBlocoDoisResident.apartamento}.`
);

// 2. Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

for (const key in moradores) {
  key === 'blocoUm' ? console.log('Bloco 1:') : console.log('Bloco 2:');
  for (const element of moradores[key]) {
    console.log(`${element.nome} ${element.sobrenome}`);
  }
}
