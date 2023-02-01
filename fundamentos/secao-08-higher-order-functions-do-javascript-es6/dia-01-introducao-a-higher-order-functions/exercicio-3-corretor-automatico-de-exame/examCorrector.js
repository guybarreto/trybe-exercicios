const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const scoreCalculator = (correctAnswers, studentAnswers) => {
    let score = 0;
    studentAnswers.forEach((answer, index) => {
        if (answer === 'N.A') {
            score += 0;
        } else if (answer === correctAnswers[index]) {
            score += 1;
        } else {
            score -= 0.5;
        }
    })
    return score;
}

const examCorrector = (correctAnswers, studentAnswers, callback) => `Resultado: ${callback(correctAnswers, studentAnswers)} pontos`;

console.log(examCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, scoreCalculator));
