const { mage } = require('./stats-database');
const battleMembers = require('./stats-database');

const castSpell = (mana, manaCost, dmg) => {
    mana -= manaCost;
    return { manaSpent: manaCost, damageDealt: dmg};
}

const mageDmg = () => {
    const minDmg = battleMembers.mage.intelligence;
    const maxDmg = minDmg * 2;
    const dmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    const manaCost = 15;
    const mana = battleMembers.mage.mana;

    return mana >= 15 ? castSpell(mana, manaCost, dmg) : { manaSpent: 0, damageDealt: 'Not enough mana...'};
}

module.exports = mageDmg;
