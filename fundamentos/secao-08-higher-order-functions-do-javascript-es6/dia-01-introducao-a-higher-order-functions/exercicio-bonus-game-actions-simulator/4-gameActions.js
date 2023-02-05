const dragonDmg = require('./1-dragonDmg');
const warriorDmg = require('./2-warriorDmg');
const { mageDmg, castSpell } = require('./3-mageDmg');
const battleMembers = require('./stats-database');

const gameActions = {
    warriorTurn: (warriorDamage) => {
        battleMembers.warrior.damage = warriorDamage();
        battleMembers.dragon.healthPoints -= warriorDamage();
    },
    mageTurn: (mageDamage) => {
        battleMembers.mage.damage = mageDamage();
        battleMembers.dragon.healthPoints -= mageDamage();
    },
    dragonTurn: (dragonDamage) => {
        battleMembers.dragon.damage = dragonDamage();
        battleMembers.mage.healthPoints -= dragonDamage();
        battleMembers.warrior.healthPoints -= dragonDamage();
    }
};
