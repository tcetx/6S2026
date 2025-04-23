const figlet = require('figlet');
const colors = require('colors'); // Using colors package
const path = require('path');
const fs = require('fs');


function showSC1() {
  figlet('Experiment 01', (err, data) => {
    if (err) {
      console.log('Error with figlet');
      console.log(err);
      return;
    }

    // Display the title in blue
    console.log(colors.blue(data));
  });

  console.log(colors.green('Learning Objective: Implementation Fuzzy Relation'));
  console.log(colors.green('Tools: Python'));

  console.log(colors.cyan('Theory:'));
  console.log(colors.white('Max-Min composition is a fundamental operation in fuzzy logic that facilitates the integration of fuzzy relations, enabling the handling of uncertainty and imprecision in various applications such as control, decision support, pattern recognition, and expert systems.'));
  console.log(colors.white('Fuzzy composition can be defined just as it is for crisp (binary) relations. Suppose R is a fuzzy relation on X × Y, S is a fuzzy relation on Y × Z, and T is a fuzzy relation on X × Z; then, Fuzzy Max–Min composition is defined as:'));
  console.log(colors.white('Example: X = {x1, x2}, Y = {y1, y2}, and Z = {z1, z2, z3}. Consider the following fuzzy relations:'));

  console.log(colors.cyan('Max-Min Composition:'));
  console.log(colors.white('Max-min composition is defined as:'));
  console.log(colors.white('μT(x1, z1) = max ( min( μR(x1, y1), μS(y1, z1)), min( μR(x1, y2), μS(y2, z1)) )'));
  console.log(colors.white('μT(x1, z2) = max ( min( μR(x1, y1), μS(y1, z2)), min( μR(x1, y2), μS(y2, z2)) )'));
  console.log(colors.white('...'));

  console.log(colors.yellow('Implementation Code:'));
  console.log(colors.white(`
import numpy as np

def max_min_composition(R, S):
    # Get the dimensions of the relations
    num_x = R.shape[0]
    num_y = R.shape[1]
    num_z = S.shape[1]

    # Initialize the result relation
    T = np.zeros((num_x, num_z))

    # Compute the max-min composition
    for i in range(num_x):
        for j in range(num_z):
            max_min = 0
            for k in range(num_y):
                min_val = min(R[i, k], S[k, j])
                max_min = max(max_min, min_val)
            T[i, j] = max_min

    return T

# Define the fuzzy relations R and S
R = np.array([[0.7, 0.6], [0.8, 0.3]])
S = np.array([[0.8, 0.5, 0.4], [0.1, 0.6, 0.7]])

# Compute the max-min composition
T = max_min_composition(R, S)

# Print the result
print("Fuzzy relation T:")
print(T)
  `));

  console.log(colors.green('Output:'));
  console.log(colors.white('Fuzzy relation T:'));
  console.log(colors.white('[[0.7 0.6 0.6]'));
  console.log(colors.white('[0.8 0.5 0.4]]'));
}


function generateCodeFile() {
  const code = `
import numpy as np

def max_min_composition(R, S):
    # Get the dimensions of the relations
    num_x = R.shape[0]
    num_y = R.shape[1]
    num_z = S.shape[1]

    # Initialize the result relation
    T = np.zeros((num_x, num_z))

    # Compute the max-min composition
    for i in range(num_x):
        for j in range(num_z):
            max_min = 0
            for k in range(num_y):
                min_val = min(R[i, k], S[k, j])
                max_min = max(max_min, min_val)
            T[i, j] = max_min

    return T

# Define the fuzzy relations R and S
R = np.array([[0.7, 0.6], [0.8, 0.3]])
S = np.array([[0.8, 0.5, 0.4], [0.1, 0.6, 0.7]])

# Compute the max-min composition
T = max_min_composition(R, S)

# Print the result
print("Fuzzy relation T:")
print(T)
  `; 

  const filePath = path.join(process.cwd(), 'sc1.py');
  fs.writeFileSync(filePath, code);
  console.log('✅ sc1.py file created successfully in this directory.');
}


module.exports = { showSC1, generateCodeFile };
