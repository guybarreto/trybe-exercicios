const battleMembers = require('./stats-database');

const castSpell = (mana, manaCost, dmg) => {
    mana -= manaCost;
    return `Mana spent: ${manaCost}\nDamage dealt: ${dmg}`;
}

const mageDmg = () => {
    const minDmg = battleMembers.mage.intelligence;
    const maxDmg = minDmg * 2;
    const dmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    const manaCost = 15;
    const mana = battleMembers.mage.mana;

    return mana >= 15 ? castSpell(mana, manaCost, dmg) : `Mana spent: 0\nDamage dealt: Not enough mana`;
}

console.log(mageDmg());
