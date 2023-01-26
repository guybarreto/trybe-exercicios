const checkTechArray = (techArray) => {
    if (techArray.length === 0) {
        throw new Error('Vazio!');
    }
}

const techList = (techArray, name) => {
    const sortedObjArray = [];
    try {
        checkTechArray(techArray);
        techArray.sort().forEach(tech => {
            sortedObjArray.push({'tech': tech, 'name': name})
        });
        return sortedObjArray;
    } catch (error) {
        return error.message;
    }
}

module.exports = techList;
