// 1. Acesse o elemento elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentElement.style.color =
  'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText =
  'Primeiro filho do filho.';

// 4. Acesse o primeiroFilho a partir de pai.
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// 8. Agora acesse o terceiroFilho a partir de pai.