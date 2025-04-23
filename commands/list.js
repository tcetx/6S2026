// list.js
const kleur = require('kleur');

function listExperiments() {
  const experiments = [
    { no: 1, description: 'Write a program to implement Fuzzy Relations (Max-Min Composition)' },
    { no: 2, description: 'Write a program to implement Union, Intersection, Complement, and Difference operations on fuzzy sets' },
    { no: 3, description: 'Write a program to implement De-Morgan’s Law' },
    { no: 4, description: 'Write a program to implement McCulloch-Pitts Model' },
    { no: 5, description: 'Write a program to implement Single Layer Perceptron Learning Algorithm' },
    { no: 6, description: 'Write a program for Back Propagation Algorithms' },
    { no: 7, description: 'Write a program to implement Simple Genetic Algorithm' },
    { no: 8, description: 'Design a fuzzy controller' },
  ];

  console.log(kleur.bold().cyan('\nList of Experiments\n'));
  console.log(kleur.yellow('No.\tDescription'));
  
  experiments.forEach(exp => {
    console.log(`${kleur.green(exp.no)}\t${exp.description}`);
  });
}

module.exports = { listExperiments };
