import './style.css';
import validator from 'validator';

const textInput = document.getElementById('textInput');
const selectList = document.getElementById('selectList');
const validationBtn = document.getElementById('validationBtn');
const answer = document.getElementById('answer');

validationBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    cpf: validator.isTaxID(textInput.value, 'pt-BR'),
    email: validator.isEmail(textInput.value),
    hexColor: validator.isHexColor(textInput.value),
    postalCode: validator.isPostalCode(textInput.value, 'BR'),
    url: validator.isURL(textInput.value),
  };
  answer.innerHTML = `A validação retornou ${campos[selectList.value]}.`;
});
