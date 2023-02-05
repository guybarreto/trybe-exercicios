const battleMembers = require('./stats-database');

const castSpell = (manaCost, dmg) => {
    battleMembers.mage.mana -= manaCost;
    return { manaSpent: manaCost, damageDealt: dmg};
}

const mageDmg = () => {
    const minDmg = battleMembers.mage.intelligence;
    const maxDmg = minDmg * 2;
    const dmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    const manaCost = 15;

    return battleMembers.mage.mana >= 15 ? castSpell(manaCost, dmg) : { manaSpent: 0, damageDealt: 'Not enough mana...'};
}

module.exports = { mageDmg, castSpell };