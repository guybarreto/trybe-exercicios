const dragonDmg = require('./1-dragonDmg');
const warriorDmg = require('./2-warriorDmg');
const { mageDmg, castSpell } = require('./3-mageDmg');
const battleMembers = require('./stats-database');

const gameActions = {
    warriorTurn: (warriorAtk) => {
        battleMembers.warrior.damage = warriorAtk();
        battleMembers.dragon.healthPoints -= warriorAtk();
    },
    mageTurn: (mageAtk) => {
        battleMembers.mage.damage = mageAtk();
        battleMembers.dragon.healthPoints -= mageAtk().damageDealt;
    },
    dragonTurn: (dragonAtk) => {
        battleMembers.dragon.damage = dragonAtk();
        battleMembers.mage.healthPoints -= dragonAtk();
        battleMembers.warrior.healthPoints -= dragonAtk();
    },
    battleMembers: battleMembers,
};

gameActions.warriorTurn(warriorDmg);
gameActions.mageTurn(mageDmg);
gameActions.dragonTurn(dragonDmg);
console.log(gameActions.battleMembers);