const dragonDmg = require('./1-dragonDmg');
const warriorDmg = require('./2-warriorDmg');
const mageDmg = require('./3-mageDmg');
const battleMembers = require('./stats-database');

const gameActions = {
    warriorTurn: (warriorDmg) => {
        battleMembers.warrior.damage = warriorDmg();
        battleMembers.dragon.healthPoints -= warriorDmg();
    },
  };
