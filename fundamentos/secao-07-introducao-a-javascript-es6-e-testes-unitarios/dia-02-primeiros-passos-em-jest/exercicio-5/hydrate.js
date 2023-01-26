const numberCheck = (string) => {
    return (string == '1' || string == '2' || string == '3' || string == '4' || string == '5' || string == '6' || string == '7' || string == '8' || string == '9')
}

const returnNumberOfGlasses = (totalGlasses) => {
    if (totalGlasses === 1) {
        return `1 copo de água`;
    } else if (totalGlasses > 1) {
        return `${totalGlasses} copos de água`;
    }
}

const hydrate = (string) => {
    const lettersArray = string.split('');
    const numbersArray = [];
    lettersArray.forEach(element => {
        if (numberCheck(element)) {
            numbersArray.push(parseInt(element));
        }
    });
    const totalGlasses = numbersArray.reduce((a, b) => a + b);
    const cupsOfWaterText = returnNumberOfGlasses(totalGlasses);
    return cupsOfWaterText;
}

module.exports = hydrate;
