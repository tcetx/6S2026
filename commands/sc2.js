const figlet = require('figlet');
const colors = require('colors'); // Using colors package
const path = require('path');
const fs = require('fs');

function showSC2() {
  figlet('Experiment 02', (err, data) => {
    if (err) {
      console.log('Error with figlet');
      console.log(err);
      return;
    }

    // Display the title in blue
    console.log(colors.blue(data));
  });

  console.log(colors.green('Learning Objective: Able to understand and apply Union, Intersection, Complement and Difference operations on fuzzy sets.'));
  console.log(colors.green('Tools: Python'));

  console.log(colors.cyan('Theory:'));
  console.log(colors.white('In fuzzy set theory, the basic operations—Union, Intersection, Complement, and Difference—are extensions of classical set operations. They are defined using membership functions, which assign a degree of membership to each element in the range [0, 1].'));

  console.log(colors.cyan('1. Union:'));
  console.log(colors.white('The union of two fuzzy sets A and B is defined by the maximum of their membership functions.'));
  console.log(colors.white('For each element x: μA∪B(x)=max (μA(x),μB(x))'));
  console.log(colors.white('Example: If:'));
  console.log(colors.white('● μA(x)={0.2,0.5,0.7}'));
  console.log(colors.white('● μB(x)={0.4,0.3,0.8}'));
  console.log(colors.white('Then: μA∪B(x)={max (0.2,0.4),max (0.5,0.3),max (0.7,0.8)}={0.4,0.5,0.8}'));

  console.log(colors.cyan('2. Intersection:'));
  console.log(colors.white('The intersection of two fuzzy sets A and B is defined by the minimum of their membership functions.'));
  console.log(colors.white('For each element x: μA∩B(x)=min (μA(x),μB(x))'));
  console.log(colors.white('Example: If:'));
  console.log(colors.white('● μA(x)={0.2,0.5,0.7}'));
  console.log(colors.white('● μB(x)={0.4,0.3,0.8}'));
  console.log(colors.white('Then: μA∩B(x)={min (0.2,0.4),min (0.5,0.3),min (0.7,0.8)}={0.2,0.3,0.7}'));

  console.log(colors.cyan('3. Complement:'));
  console.log(colors.white('The complement of a fuzzy set A is defined as: μ¬A(x)=1−μA(x)'));
  console.log(colors.white('Example: If:'));
  console.log(colors.white('● μA(x)={0.2,0.5,0.7}'));
  console.log(colors.white('Then: μ¬A(x)={1−0.2,1−0.5,1−0.7}={0.8,0.5,0.3}'));

  console.log(colors.cyan('4. Difference:'));
  console.log(colors.white('The difference (or relative complement) of two fuzzy sets A and B is defined as: μA−B(x)=min (μA(x),1−μB(x))'));
  console.log(colors.white('Example: If:'));
  console.log(colors.white('● μA(x)={0.2,0.5,0.7}'));
  console.log(colors.white('● μB(x)={0.4,0.3,0.8}'));
  console.log(colors.white('Then: μA−B(x)={min (0.2,1−0.4),min (0.5,1−0.3),min (0.7,1−0.8)}'));

  console.log(colors.yellow('Implementation Code:'));
  console.log(colors.white(`
class FuzzySet:
    def __init__(self, universe, membership_values):
        self.universe = universe
        self.membership_values = membership_values

    def union(self, other):
        universe = self.universe
        membership_values = [max(a, b) for a, b in zip(self.membership_values, other.membership_values)]
        return FuzzySet(universe, membership_values)

    def intersection(self, other):
        universe = self.universe
        membership_values = [min(a, b) for a, b in zip(self.membership_values, other.membership_values)]
        return FuzzySet(universe, membership_values)

    def complement(self):
        universe = self.universe
        membership_values = [1 - a for a in self.membership_values]
        return FuzzySet(universe, membership_values)

    def difference(self, other):
        return self.intersection(other.complement())

    def __str__(self):
        """Return a string representation of the fuzzy set."""
        return str(list(zip(self.universe, self.membership_values)))


# Example usage:

# Define the universe of discourse
universe = [1, 2, 3, 4, 5]

# Define two fuzzy sets
A = FuzzySet(universe, [0.2, 0.5, 0.8, 0.9, 1.0])
B = FuzzySet(universe, [0.1, 0.3, 0.6, 0.8, 0.9])

# Compute and print the union, intersection, complement, and difference of the fuzzy sets
print("Union:", A.union(B))
print("Intersection:", A.intersection(B))
print("Complement of A:", A.complement())
print("Difference of A and B:", A.difference(B))
  `));

  console.log(colors.green('Output:'));
  console.log(colors.white('Union: [(1, 0.2), (2, 0.5), (3, 0.8), (4, 0.9), (5, 1.0)]'));
  console.log(colors.white('Intersection: [(1, 0.1), (2, 0.3), (3, 0.6), (4, 0.8), (5, 0.9)]'));
  console.log(colors.white('Complement of A: [(1, 0.8), (2, 0.5), (3, 0.19999999999999996), (4, 0.09999999999999998), (5, 0.0)]'));
  console.log(colors.white('Difference of A and B: [(1, 0.2), (2, 0.5), (3, 0.4), (4, 0.19999999999999996), (5, 0.09999999999999998)]'));
}



function generateCodeFile() {
  const code = `class FuzzySet:
    def __init__(self, universe, membership_values):
        self.universe = universe
        self.membership_values = membership_values

    def union(self, other):
        universe = self.universe
        membership_values = [max(a, b) for a, b in zip(self.membership_values, other.membership_values)]
        return FuzzySet(universe, membership_values)

    def intersection(self, other):
        universe = self.universe
        membership_values = [min(a, b) for a, b in zip(self.membership_values, other.membership_values)]
        return FuzzySet(universe, membership_values)

    def complement(self):
        universe = self.universe
        membership_values = [1 - a for a in self.membership_values]
        return FuzzySet(universe, membership_values)

    def difference(self, other):
        return self.intersection(other.complement())

    def __str__(self):
        """Return a string representation of the fuzzy set."""
        return str(list(zip(self.universe, self.membership_values)))


# Example usage:

# Define the universe of discourse
universe = [1, 2, 3, 4, 5]

# Define two fuzzy sets
A = FuzzySet(universe, [0.2, 0.5, 0.8, 0.9, 1.0])
B = FuzzySet(universe, [0.1, 0.3, 0.6, 0.8, 0.9])

# Compute and print the union, intersection, complement, and difference of the fuzzy sets
print("Union:", A.union(B))
print("Intersection:", A.intersection(B))
print("Complement of A:", A.complement())
print("Difference of A and B:", A.difference(B))

  `; 

  const filePath = path.join(process.cwd(), 'sc2.py');
  fs.writeFileSync(filePath, code);
  console.log('✅ sc2.py file created successfully in this directory.');
}


module.exports = { showSC2, generateCodeFile };


