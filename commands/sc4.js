const figlet = require('figlet');
const colors = require('colors'); // Using colors package
const path = require('path');
const fs = require('fs');

function showSC4() {
  figlet('Experiment 04', (err, data) => {
    if (err) {
      console.log('Error with figlet');
      console.log(err);
      return;
    }

    // Display the title in blue
    console.log(colors.blue(data));
  });

  console.log(colors.green('Learning Objective: Implementation of Simple Neural Network (McCulloch-Pitts Model).'));
  console.log(colors.green('Tools: Python'));

  console.log(colors.cyan('Theory:'));
  console.log(colors.white('The McCulloch-Pitts model is a simple model of a neuron, proposed by Warren McCulloch and Walter Pitts in 1943.'));
  console.log(colors.white('It is a simplified model of a biological neuron, which receives inputs and produces an output based on these inputs.'));
  
  console.log(colors.white('The neuron computes the weighted sum of the inputs and compares it to a threshold. If the sum is greater than or equal to the threshold, the output is 1. Otherwise, it is 0.'));
  
  console.log(colors.white('Formally, the output y of the neuron is given by:'));
  console.log(colors.white('y = 1 if ∑(xi * wi) >= θ'));
  console.log(colors.white('    0 otherwise'));

  console.log(colors.cyan('Implementation Code:'));

  console.log(colors.yellow(`
# Step 1: Define Inputs, Weights, and Threshold 
inputs = [1, 0, 1, 1, 0]  # Binary inputs 
weights = [0.5, -0.5, 0.8, 1.2, -0.3]  # Weights 
threshold = 1  # Threshold value 

# Step 2: Compute Weighted Sum with Detailed Calculation 
weighted_sum = 0 
for i in range(len(inputs)): 
    product = inputs[i] * weights[i] 
    print(f"Input[{i}]: {inputs[i]}, Weight[{i}]: {weights[i]}, Product: {product}") 
    weighted_sum += product 
print(f"Total Weighted Sum: {weighted_sum}") 

# Step 3: Apply Threshold Condition with Explanation 
if weighted_sum >= threshold: 
    output = 1 
    print(f"Weighted sum {weighted_sum} >= threshold {threshold}, Output: 1") 
else: 
    output = 0 
    print(f"Weighted sum {weighted_sum} < threshold {threshold}, Output: 0") 

# Step 4: Print Final Output 
print(f"Final Neuron Output: {output}")`));

  console.log(colors.green('Output:'));
  console.log(colors.white('Input[0]: 1, Weight[0]: 0.5, Product: 0.5'));
  console.log(colors.white('Input[1]: 0, Weight[1]: -0.5, Product: -0.0'));
  console.log(colors.white('Input[2]: 1, Weight[2]: 0.8, Product: 0.8'));
  console.log(colors.white('Input[3]: 1, Weight[3]: 1.2, Product: 1.2'));
  console.log(colors.white('Input[4]: 0, Weight[4]: -0.3, Product: -0.0'));
  console.log(colors.white('Total Weighted Sum: 2.5'));
  console.log(colors.white('Weighted sum 2.5 >= threshold 1, Output: 1'));
  console.log(colors.white('Final Neuron Output: 1'));
}


function generateCodeFile() {
  const code = `# Step 1: Define Inputs, Weights, and Threshold 
inputs = [1, 0, 1, 1, 0]  # Binary inputs 
weights = [0.5, -0.5, 0.8, 1.2, -0.3]  # Weights 
threshold = 1  # Threshold value 

# Step 2: Compute Weighted Sum with Detailed Calculation 
weighted_sum = 0 
for i in range(len(inputs)): 
    product = inputs[i] * weights[i] 
    print(f"Input[{i}]: {inputs[i]}, Weight[{i}]: {weights[i]}, Product: {product}") 
    weighted_sum += product 
print(f"Total Weighted Sum: {weighted_sum}") 

# Step 3: Apply Threshold Condition with Explanation 
if weighted_sum >= threshold: 
    output = 1 
    print(f"Weighted sum {weighted_sum} >= threshold {threshold}, Output: 1") 
else: 
    output = 0 
    print(f"Weighted sum {weighted_sum} < threshold {threshold}, Output: 0") 

# Step 4: Print Final Output 
print(f"Final Neuron Output: {output}")

  `; 

  const filePath = path.join(process.cwd(), 'sc4.py');
  fs.writeFileSync(filePath, code);
  console.log('✅ sc4.py file created successfully in this directory.');
}

module.exports = { showSC4, generateCodeFile };
