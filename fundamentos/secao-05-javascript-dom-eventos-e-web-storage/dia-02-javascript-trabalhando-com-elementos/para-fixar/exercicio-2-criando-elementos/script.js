// 1. Crie um irmão para elementoOndeVoceEsta.
const newElement1 = document.createElement('section');
newElement1.id = 'irmaoDeElementoOndeVoceEsta';
const pai = document.getElementById('elementoOndeVoceEsta').parentElement;
pai.appendChild(newElement1);

// 2. Crie um filho para elementoOndeVoceEsta.
// 3. Crie um filho para primeiroFilhoDoFilho.
// 4. A partir desse filho criado, acesse terceiroFilho.
