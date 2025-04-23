const fs = require('fs');
const path = require('path');

function showSC8() {
  console.log('📘 Experiment 08: Design a fuzzy controller\n...');
  // your full content here
}

function generateCodeFile() {
  const code = `# Importing necessary Libraries
import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

# Step 1: Define the input and output variables
distance_to_obstacle = ctrl.Antecedent(np.arange(0, 101, 1), 'distance_to_obstacle')
car_speed = ctrl.Antecedent(np.arange(0, 121, 1), 'car_speed')
acceleration = ctrl.Consequent(np.arange(-5, 6, 1), 'acceleration')

# Step 2: Define membership functions for inputs and output
distance_to_obstacle['Very Close'] = fuzz.trimf(distance_to_obstacle.universe, [0, 0, 30])
distance_to_obstacle['Close'] = fuzz.trimf(distance_to_obstacle.universe, [20, 40, 60])
distance_to_obstacle['Safe'] = fuzz.trimf(distance_to_obstacle.universe, [50, 70, 90])
distance_to_obstacle['Far'] = fuzz.trimf(distance_to_obstacle.universe, [80, 100, 100])

car_speed['Slow'] = fuzz.trimf(car_speed.universe, [0, 0, 60])
car_speed['Moderate'] = fuzz.trimf(car_speed.universe, [40, 60, 80])
car_speed['Fast'] = fuzz.trimf(car_speed.universe, [70, 120, 120])

acceleration['Brake Hard'] = fuzz.trimf(acceleration.universe, [-5, -5, -2.5])
acceleration['Brake Light'] = fuzz.trimf(acceleration.universe, [-3, -1.5, 0])
acceleration['Maintain'] = fuzz.trimf(acceleration.universe, [-1, 0, 1])
acceleration['Accelerate Light'] = fuzz.trimf(acceleration.universe, [0, 1.5, 3])
acceleration['Accelerate Hard'] = fuzz.trimf(acceleration.universe, [2.5, 5, 5])

# Step 3: Define fuzzy rules
rules = [
    ctrl.Rule(distance_to_obstacle['Very Close'] & car_speed['Fast'], acceleration['Brake Hard']),
    ctrl.Rule(distance_to_obstacle['Close'] & car_speed['Fast'], acceleration['Brake Light']),
    ctrl.Rule(distance_to_obstacle['Safe'] & car_speed['Moderate'], acceleration['Maintain']),
    ctrl.Rule(distance_to_obstacle['Far'] & car_speed['Slow'], acceleration['Accelerate Light']),
    ctrl.Rule(distance_to_obstacle['Far'] & car_speed['Moderate'], acceleration['Accelerate Hard']),
]

# Step 4: Create the control system
speed_control_system = ctrl.ControlSystem(rules)
speed_control = ctrl.ControlSystemSimulation(speed_control_system)

# Step 5: Simulate the system
speed_control.input['distance_to_obstacle'] = 40
speed_control.input['car_speed'] = 80

# Compute the output
speed_control.compute()

# Step 6: Get the result
print(f"Acceleration/Deceleration Action: {speed_control.output['acceleration']:.2f} m/s²")

# Visualize the results
distance_to_obstacle.view(sim=speed_control)
car_speed.view(sim=speed_control)
acceleration.view(sim=speed_control)
`;

  const filePath = path.join(process.cwd(), 'sc8.py');
  fs.writeFileSync(filePath, code);
  console.log('✅ sc8.py file created successfully in this directory.');
}

module.exports = { showSC8, generateCodeFile };
 