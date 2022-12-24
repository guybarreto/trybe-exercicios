// 1. Crie um irmão para elementoOndeVoceEsta.
const newElement1 = document.createElement('section');
newElement1.id = 'irmaoDeElementoOndeVoceEsta';
const paiDeElementoOndeVoceEsta = document.getElementById(
  'elementoOndeVoceEsta'
).parentElement;
paiDeElementoOndeVoceEsta.appendChild(newElement1);

// 2. Crie um filho para elementoOndeVoceEsta.
const newElement2 = document.createElement('section');
newElement2.id = 'filhoDeElementoOndeVoceEsta';
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(newElement2);

// 3. Crie um filho para primeiroFilhoDoFilho.
// 4. A partir desse filho criado, acesse terceiroFilho.
