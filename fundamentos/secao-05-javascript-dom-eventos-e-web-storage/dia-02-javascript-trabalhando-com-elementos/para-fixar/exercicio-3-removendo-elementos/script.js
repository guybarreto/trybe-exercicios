// 1. Remova a tag h2, filha do elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhaElementoOndeVoceEsta = document.querySelector(
  '#elementoOndeVoceEsta h2'
);
elementoOndeVoceEsta.removeChild(filhaElementoOndeVoceEsta);
