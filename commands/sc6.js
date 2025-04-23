const figlet = require('figlet');
const colors = require('colors'); // Using colors package
const path = require('path');
const fs = require('fs');

function showSC6() {
  figlet('Experiment 06', (err, data) => {
    if (err) {
      console.log('Error with figlet');
      console.log(err);
      return;
    }

    // Display the title in blue
    console.log(colors.blue(data));
  });

  console.log(colors.green('Learning Objective: Write a Program for Error Back Propagation Algorithm (EBPA) Learning.'));
  console.log(colors.green('Tools: Python'));

  console.log(colors.cyan('Theory:'));
  console.log(colors.white('The Back Propagation Algorithm (BPA) is used for training multi-layer neural networks.'));
  console.log(colors.white('It adjusts the weights of the connections between neurons to minimize the error.'));
  console.log(colors.white('The algorithm involves two main phases: forward and backward propagation.'));
  console.log(colors.white('During forward propagation, input data is fed into the network to compute the output.'));
  console.log(colors.white('During backward propagation, the error is propagated backward to adjust the weights based on the gradient of the loss function.'));
  
  console.log(colors.white('The training process uses the gradient descent algorithm, and the error is usually calculated using Mean Squared Error (MSE).'));

  console.log(colors.white('Step 1: Inputs X arrive through the preconnected path.'));
  console.log(colors.white('Step 2: Inputs are modeled using random weights.'));
  console.log(colors.white('Step 3: Compute the output from the input layer to hidden layer and then to output layer.'));
  console.log(colors.white('Step 4: Calculate the error in the output.'));
  console.log(colors.white('Step 5: Propagate the error backward through the layers to adjust weights.'));
  console.log(colors.white('Step 6: Repeat until the desired error threshold is reached.'));

  console.log(colors.cyan('Implementation Code:'));

  console.log(colors.yellow(`
import numpy as np 

class NeuralNetwork: 
    def __init__(self, input_size, hidden_size, output_size): 
        self.weights_input_hidden = np.random.randn(input_size, hidden_size) 
        self.weights_hidden_output = np.random.randn(hidden_size, output_size) 
        self.bias_hidden = np.zeros((1, hidden_size)) 
        self.bias_output = np.zeros((1, output_size)) 

    def sigmoid(self, x): 
        return 1 / (1 + np.exp(-x)) 

    def sigmoid_derivative(self, x): 
        return x * (1 - x) 

    def forward(self, X): 
        self.hidden = self.sigmoid(np.dot(X, self.weights_input_hidden) + self.bias_hidden) 
        return self.sigmoid(np.dot(self.hidden, self.weights_hidden_output) + self.bias_output) 

    def train(self, X, y, epochs, learning_rate): 
        for epoch in range(epochs): 
            output = self.forward(X) 
            error = y - output  
            delta_output = error * self.sigmoid_derivative(output) 
            delta_hidden = np.dot(delta_output, self.weights_hidden_output.T) * self.sigmoid_derivative(self.hidden) 
            self.weights_hidden_output += learning_rate * np.dot(self.hidden.T, delta_output) 
            self.bias_output += learning_rate * np.sum(delta_output, axis=0, keepdims=True) 
            self.weights_input_hidden += learning_rate * np.dot(X.T, delta_hidden) 
            self.bias_hidden += learning_rate * np.sum(delta_hidden, axis=0, keepdims=True) 
            if epoch % 1000 == 0: 
                print(f"Epoch {epoch}, Loss: {np.mean(np.square(error))}") 

    def predict(self, X): 
        return self.forward(X) 

if __name__ == "__main__": 
    X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]]) 
    y = np.array([[0], [1], [1], [0]]) 
    nn = NeuralNetwork(2, 2, 1) 
    nn.train(X, y, epochs=10000, learning_rate=0.1) 
    print("Predictions:", nn.predict(X)) 

    print("\nUpdated Weights Input Hidden:\n", nn.weights_input_hidden) 
    print("\nUpdated Weights Hidden Output:\n", nn.weights_hidden_output) 
    print("\nUpdated Bias Hidden:\n", nn.bias_hidden) 
    print("\nUpdated Bias Output:\n", nn.bias_output) 
`));

  console.log(colors.green('Output:'));
  console.log(colors.white('Epoch 0, Loss: 0.2746592859459458'));
  console.log(colors.white('Epoch 1000, Loss: 0.2128462842530841'));
  console.log(colors.white('Epoch 2000, Loss: 0.16144889433821774'));
  console.log(colors.white('Epoch 3000, Loss: 0.06573861311222284'));
  console.log(colors.white('Epoch 4000, Loss: 0.020175181304352384'));
  console.log(colors.white('Epoch 5000, Loss: 0.010056606592575814'));
  console.log(colors.white('Epoch 6000, Loss: 0.006394745799415671'));
  console.log(colors.white('Epoch 7000, Loss: 0.004600797124357215'));
  console.log(colors.white('Epoch 8000, Loss: 0.003558771170884851'));
  console.log(colors.white('Epoch 9000, Loss: 0.0028854598050239606'));
  console.log(colors.white('Predictions: [[0.04217431] [0.9531891 ]] [0.95331543][0.05934264]'));

  console.log(colors.white('Updated Weights Input Hidden:'));
  console.log(colors.white('[[-4.0224846  -5.82254766] [-4.01326131 -5.77154789]]'));

  console.log(colors.white('Updated Weights Hidden Output:'));
  console.log(colors.white('[[ 7.86364353] [-8.148189  ]]'));

  console.log(colors.white('Updated Bias Hidden:'));
  console.log(colors.white('[[5.93445651 2.21493266]]'));

  console.log(colors.white('Updated Bias Output:'));
  console.log(colors.white('[[-3.61947614]]'));
}


function generateCodeFile() {
  const code = `
import numpy as np 

class NeuralNetwork: 
    def __init__(self, input_size, hidden_size, output_size): 
        self.weights_input_hidden = np.random.randn(input_size, hidden_size) 
        self.weights_hidden_output = np.random.randn(hidden_size, output_size) 
        self.bias_hidden = np.zeros((1, hidden_size)) 
        self.bias_output = np.zeros((1, output_size)) 

    def sigmoid(self, x): 
        return 1 / (1 + np.exp(-x)) 

    def sigmoid_derivative(self, x): 
        return x * (1 - x) 

    def forward(self, X): 
        self.hidden = self.sigmoid(np.dot(X, self.weights_input_hidden) + self.bias_hidden) 
        return self.sigmoid(np.dot(self.hidden, self.weights_hidden_output) + self.bias_output) 

    def train(self, X, y, epochs, learning_rate): 
        for epoch in range(epochs): 
            output = self.forward(X) 
            error = y - output  
            delta_output = error * self.sigmoid_derivative(output) 
            delta_hidden = np.dot(delta_output, self.weights_hidden_output.T) * self.sigmoid_derivative(self.hidden) 
            self.weights_hidden_output += learning_rate * np.dot(self.hidden.T, delta_output) 
            self.bias_output += learning_rate * np.sum(delta_output, axis=0, keepdims=True) 
            self.weights_input_hidden += learning_rate * np.dot(X.T, delta_hidden) 
            self.bias_hidden += learning_rate * np.sum(delta_hidden, axis=0, keepdims=True) 
            if epoch % 1000 == 0: 
                print(f"Epoch {epoch}, Loss: {np.mean(np.square(error))}") 

    def predict(self, X): 
        return self.forward(X) 

if __name__ == "__main__": 
    X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]]) 
    y = np.array([[0], [1], [1], [0]]) 
    nn = NeuralNetwork(2, 2, 1) 
    nn.train(X, y, epochs=10000, learning_rate=0.1) 
    print("Predictions:", nn.predict(X)) 

    print("\nUpdated Weights Input Hidden:\n", nn.weights_input_hidden) 
    print("\nUpdated Weights Hidden Output:\n", nn.weights_hidden_output) 
    print("\nUpdated Bias Hidden:\n", nn.bias_hidden) 
    print("\nUpdated Bias Output:\n", nn.bias_output) 

  `; 

  const filePath = path.join(process.cwd(), 'sc6.py');
  fs.writeFileSync(filePath, code);
  console.log('✅ sc6.py file created successfully in this directory.');
}

module.exports = { showSC6, generateCodeFile };
