// Problem:

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Solution:

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     const a = Math.ceil(fighter1.health / fighter2.damagePerAttack);
//     const b = Math.ceil(fighter2.health / fighter1.damagePerAttack);
//         return a < b ? fighter2.name : b < a ? fighter1.name : firstAttacker;
//   }