const figlet = require('figlet');
const colors = require('colors'); // Using colors package
const path = require('path');
const fs = require('fs');

function showSC5() {
  figlet('Experiment 05', (err, data) => {
    if (err) {
      console.log('Error with figlet');
      console.log(err);
      return;
    }

    // Display the title in blue
    console.log(colors.blue(data));
  });

  console.log(colors.green('Learning Objective: Implement Single Layer Perceptron Learning Algorithm.'));
  console.log(colors.green('Tools: Python'));

  console.log(colors.cyan('Theory:'));
  console.log(colors.white('The single layer perceptron is an artificial neural network used for supervised learning.'));
  console.log(colors.white('It consists of a single layer of artificial neurons connected to the network inputs.'));
  console.log(colors.white('The perceptron classifies input data into two or more classes based on learned weights.'));
  console.log(colors.white('The perceptron learning rule adjusts the weights based on the error between predicted and actual outputs.'));
  
  console.log(colors.white('Algorithm:'));
  console.log(colors.white('1. Initialize the weights to small random values.'));
  console.log(colors.white('2. For each training example:'));
  console.log(colors.white('    a. Compute the output of the network.'));
  console.log(colors.white('    b. Compare the predicted output to the actual output.'));
  console.log(colors.white('    c. If incorrect, adjust the weights in the direction of the correct output.'));
  console.log(colors.white('3. Repeat until the network performs satisfactorily on the training data.'));

  console.log(colors.cyan('Implementation Code:'));

  console.log(colors.yellow(`
import numpy as np 

class Perceptron: 
    def __init__(self, learning_rate=0.01, epochs=100): 
        self.learning_rate = learning_rate  # How fast the model learns 
        self.epochs = epochs  # Number of passes over the training data 
        self.weights = None  # Will store the learned weights 
        self.bias = None  # Will store the learned bias 

    def fit(self, X, y): 
        # Initialize weights and bias to zero 
        n_features = X.shape[1]  # Number of input features 
        self.weights = np.zeros(n_features) 
        self.bias = 0 

        # Training loop 
        for _ in range(self.epochs): 
            for i in range(len(X)): 
                # Step 1: Calculate the prediction 
                linear_output = np.dot(X[i], self.weights) + self.bias 
                prediction = 1 if linear_output >= 0 else -1  # Step function 

                # Step 2: Update weights and bias if prediction is wrong 
                if prediction != y[i]: 
                    update = self.learning_rate * (y[i] - prediction) 
                    self.weights += update * X[i] 
                    self.bias += update 

    def predict(self, X): 
        # Make predictions for new data 
        linear_output = np.dot(X, self.weights) + self.bias 
        return np.where(linear_output >= 0, 1, -1)  # Step function 

# Example usage 
if __name__ == "__main__": 
    # Example dataset (X) and labels (y) 
    X = np.array([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])  # Input features 
    y = np.array([-1, -1, 1, 1, 1])  # Labels (-1 or 1) 

    # Create and train the perceptron 
    perceptron = Perceptron(learning_rate=0.01, epochs=100) 
    perceptron.fit(X, y) 

    # Make predictions 
    predictions = perceptron.predict(X) 
    print("Predictions:", predictions) 

    # Test on new data 
    X_test = np.array([[6, 7], [0, 1]])  # New data points 
    predictions_test = perceptron.predict(X_test) 
    print("Test Predictions:", predictions_test)
`));

  console.log(colors.green('Output:'));
  console.log(colors.white('Predictions: [-1 -1  1  1  1]'));
  console.log(colors.white('Test Predictions: [ 1 -1]'));
}


function generateCodeFile() {
  const code = `
  
import numpy as np 

class Perceptron: 
    def __init__(self, learning_rate=0.01, epochs=100): 
        self.learning_rate = learning_rate  # How fast the model learns 
        self.epochs = epochs  # Number of passes over the training data 
        self.weights = None  # Will store the learned weights 
        self.bias = None  # Will store the learned bias 

    def fit(self, X, y): 
        # Initialize weights and bias to zero 
        n_features = X.shape[1]  # Number of input features 
        self.weights = np.zeros(n_features) 
        self.bias = 0 

        # Training loop 
        for _ in range(self.epochs): 
            for i in range(len(X)): 
                # Step 1: Calculate the prediction 
                linear_output = np.dot(X[i], self.weights) + self.bias 
                prediction = 1 if linear_output >= 0 else -1  # Step function 

                # Step 2: Update weights and bias if prediction is wrong 
                if prediction != y[i]: 
                    update = self.learning_rate * (y[i] - prediction) 
                    self.weights += update * X[i] 
                    self.bias += update 

    def predict(self, X): 
        # Make predictions for new data 
        linear_output = np.dot(X, self.weights) + self.bias 
        return np.where(linear_output >= 0, 1, -1)  # Step function 

# Example usage 
if __name__ == "__main__": 
    # Example dataset (X) and labels (y) 
    X = np.array([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])  # Input features 
    y = np.array([-1, -1, 1, 1, 1])  # Labels (-1 or 1) 

    # Create and train the perceptron 
    perceptron = Perceptron(learning_rate=0.01, epochs=100) 
    perceptron.fit(X, y) 

    # Make predictions 
    predictions = perceptron.predict(X) 
    print("Predictions:", predictions) 

    # Test on new data 
    X_test = np.array([[6, 7], [0, 1]])  # New data points 
    predictions_test = perceptron.predict(X_test) 
    print("Test Predictions:", predictions_test)

  `; 

  const filePath = path.join(process.cwd(), 'sc5.py');
  fs.writeFileSync(filePath, code);
  console.log('✅ sc5.py file created successfully in this directory.');
}

module.exports = { showSC5, generateCodeFile };
