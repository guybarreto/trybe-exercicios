const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// - Copie esse arquivo e edite apenas ele;
// - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 1. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const liTags = document.getElementsByTagName('li');

for (let index = 0; index < liTags.length; index += 1) {
  const li = liTags[index];
  li.addEventListener('click', addTechClass);
}

function addTechClass(event) {
  for (let index = 0; index < liTags.length; index += 1) {
    const li = liTags[index];
    li.classList.remove('tech');
  }
  event.target.className = 'tech';
}

// 2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const inputTag = document.getElementsByTagName('input')[0];
inputTag.addEventListener('input', changeTechText);

function changeTechText() {
  const elementWithClassTech = document.getElementsByClassName('tech')[0];
  elementWithClassTech.innerText = inputTag.value;
}

// 3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// Que tal redirecionar para seu portfólio?
const meuTop3 = document.getElementById('my-spotrybefy');
meuTop3.addEventListener('dblclick', redirectToPortfolio);

function redirectToPortfolio() {
  window.open('https://guybarreto.github.io/', '_blank');
}

// 4. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
