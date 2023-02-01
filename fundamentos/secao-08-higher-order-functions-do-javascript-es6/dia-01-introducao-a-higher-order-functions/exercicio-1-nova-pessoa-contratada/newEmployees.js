const nameAndEmail = (fullName) => `${fullName}, email: ${fullName.replace(' ', '_').toLowerCase()}@trybe.com.br`;

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(nameAndEmail)); 
  /*
   {
    id1: 'Pedro Guerra, email: pedro_guerra@trybe.com.br',
    id2: 'Luiza Drumond, email: luiza_drumond@trybe.com.br',
    id3: 'Carla Paiva, email: carla_paiva@trybe.com.br'
  }
  */
