
const resultChecker = (betNumber, drawnNumber) => betNumber === drawnNumber ? 'Parabéns, você ganhou!' : 'Continue tentando.';

const lotteryDraw = (betNumber, callback) => {
    const drawnNumber = Math.floor(Math.random() * 5 + 1);
    return callback(betNumber, drawnNumber);
}

console.log(lotteryDraw(3, resultChecker));