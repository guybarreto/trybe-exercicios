/* Exercício Bônus
1. Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;

2. Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
*/

const allLessons = {
    lesson1:
     { materia: 'Matemática',
       numeroEstudantes: 20,
       professor: 'Maria Clara',
       turno: 'manhã' },
    lesson2:
     { materia: 'História',
       numeroEstudantes: 20,
       professor: 'Carlos',
       turno: 'noite' },
    lesson3:
     { materia: 'Matemática',
       numeroEstudantes: 10,
       professor: 'Maria Clara',
       turno: 'noite' }
  };

// 1.
const mathStudents = (object) => {
    const objValuesArray = Object.values(object);
    let total = 0;

    for (let index = 0; index < objValuesArray.length; index += 1) {
        const object = objValuesArray[index]; // each object contains materia, numeroEstudantes etc and its respective values
        const materia = Object.values(object)[0]; // value of materia key ('Matemática' or 'História')
        if (materia === 'Matemática') {
            total += Object.values(object)[1]; // sums value of key numeroEstudantes
        }
    }
    return total;
}
console.log(mathStudents(allLessons)); // 30

// 2.
const createReport = (object, teacher) => {
    const report = {
        professor: '',
        aulas: [],
        estudantes: 0,
    };
    for (const lesson in object) {
        if (object[lesson].professor === teacher) {
            report.professor = teacher;
            report.aulas.push(object[lesson].materia);
            report.estudantes += object[lesson].numeroEstudantes;
        }
    }
    return report;
}
console.log(createReport(allLessons, 'Maria Clara'));