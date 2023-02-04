const battleMembers = require('./stats-database');

const warriorDmg = () => {
    const minDmg = battleMembers.warrior.strength;
    const maxDmg = minDmg * battleMembers.warrior.weaponDmg;
    const dmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg); // +1 to make the maxDmg inclusive
    return dmg;
}

module.exports = warriorDmg;