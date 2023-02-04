const battleMembers = require('./stats-database');

const dragonDmg = () => {
    const maxDmg = battleMembers.dragon.strength;
    const minDmg = 15;
    const dmg = Math.round(Math.random() * (maxDmg - minDmg + 1) + minDmg); // +1 to make the maxDmg inclusive

    return dmg;
}
