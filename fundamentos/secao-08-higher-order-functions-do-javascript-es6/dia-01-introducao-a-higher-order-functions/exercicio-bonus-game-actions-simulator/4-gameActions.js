const dragonDmg = require('./1-dragonDmg');
const warriorDmg = require('./2-warriorDmg');
const { mageDmg, castSpell } = require('./3-mageDmg');
const battleMembers = require('./stats-database');

const gameActions = {
    warriorTurn: (warriorDmg) => {
        battleMembers.warrior.damage = warriorDmg();
        battleMembers.dragon.healthPoints -= warriorDmg;
    },
    mageTurn: (mageDmg) => {
        console.log(battleMembers.mage.mana);
        battleMembers.mage.damage = mageDmg();
        console.log(battleMembers.mage.mana);
        battleMembers.dragon.healthPoints -= mageDmg;
    },
};

gameActions.mageTurn(mageDmg);
