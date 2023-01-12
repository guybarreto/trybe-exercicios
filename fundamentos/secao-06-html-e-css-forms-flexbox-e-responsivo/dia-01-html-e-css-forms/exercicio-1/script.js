const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const answerTextArea = document.getElementsByTagName('textArea')[0];

submitBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
  const nameInputCheck = nameInput.value.length >= 10 && nameInput.value.length <= 40;
  const emailInputCheck = emailInput.value.length >= 10 && emailInput.value.length <= 50;
  const answerTextAreaCheck = answerTextArea.value.length <= 500;

  if (nameInputCheck && emailInputCheck && answerTextAreaCheck) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert('Dados Inválidos');
  }
});
