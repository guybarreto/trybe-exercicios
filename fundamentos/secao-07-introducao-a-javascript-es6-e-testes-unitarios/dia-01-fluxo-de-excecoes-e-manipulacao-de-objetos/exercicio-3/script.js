const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1.
const addNightShift = (object, key, value) => {
    object[key] = value;
}
addNightShift(lesson2, 'turno', 'noite');

// 2.
const objectKeysList = (object) => {
    console.log(Object.keys(object));
}
objectKeysList(lesson2);

// 3.
const objectLength = (object) => {
    console.log(Object.entries(object).length);
}
objectLength(lesson2);

// 4.
const objectValuesList = (object) => {
    console.log(Object.values(object));
}
objectValuesList(lesson2);

// 5.
// Solution 1:
// const entry1 = {lesson1: Object.assign({}, lesson1)};
// const entry2 = {lesson2: Object.assign({}, lesson2)};
// const entry3 = {lesson3: Object.assign({}, lesson3)};
// const allLessons = Object.assign({}, entry1, entry2, entry3);
// console.log(allLessons);

// Solution 2 (cleaner):
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

/* Requisitos
1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3. Crie uma função para mostrar o tamanho de um objeto.
4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3.
6. Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. */