// 1. Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
// Adicione seu código aqui
const showAllEmails = (element) => {
  console.log(`O email ${element} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach(showAllEmails);