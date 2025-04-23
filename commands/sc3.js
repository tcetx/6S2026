const figlet = require('figlet');
const colors = require('colors'); // Using colors package
const path = require('path');
const fs = require('fs');

function showSC3() {
  figlet('Experiment 03', (err, data) => {
    if (err) {
      console.log('Error with figlet');
      console.log(err);
      return;
    }

    // Display the title in blue
    console.log(colors.blue(data));
  });

  console.log(colors.green('Learning Objective: Write a program to implement De-Morgan’s Law.'));
  console.log(colors.green('Tools: Python'));

  console.log(colors.cyan('Theory:'));
  console.log(colors.white('De Morgan\'s Laws:'));
  console.log(colors.white('De Morgan\'s laws for fuzzy sets are an extension of classical De Morgan’s laws to the domain of fuzzy logic. They define the relationship between the fuzzy union, intersection, and complement operations.'));
  
  console.log(colors.cyan('1. First Law:'));
  console.log(colors.white('(¬A∪¬B)(x)=¬(A∩B)(x)'));
  console.log(colors.white('Where ¬A(x)=1−A(x) ∪ is the maximum operator, and ∩ is the minimum operator.'));
  
  console.log(colors.cyan('2. Second Law:'));
  console.log(colors.white('(¬A∩¬B)(x)=¬(A∪B)(x)'));

  console.log(colors.white('Example: Let X={1,2,3}, and the fuzzy sets A and B be defined as:'));
  console.log(colors.white('A={1/0.8,2/0.6,3/0.4}'));
  console.log(colors.white('B={1/0.7,2/0.5,3/0.2}'));
  console.log(colors.white('Here, the numbers (e.g., 0.8) represent the membership degrees of the elements in the respective sets.'));
  
  console.log(colors.cyan('First Law:'));

  console.log(colors.white('Step 1: Find the complements of A and B:'));
  console.log(colors.white('¬A={1/0.2,2/0.4,3/0.6},'));
  console.log(colors.white('¬B={1/0.3,2/0.5,3/0.8}'));
  
  console.log(colors.white('Step 2: Compute ¬A∪¬B (union = maximum):'));
  console.log(colors.white('¬A∪¬B={1/max (0.2,0.3),2/max (0.4,0.5),3/max (0.6,0.8)}'));
  console.log(colors.white('¬A∪¬B={1/0.3,2/0.5,3/0.8}'));
  
  console.log(colors.white('Step 3: Compute A∩B (intersection = minimum):'));
  console.log(colors.white('A∩B={1/min (0.8,0.7),2/min (0.6,0.5),3/min (0.4,0.2)}'));
  console.log(colors.white('A∩B={1/0.7,2/0.5,3/0.2}'));

  console.log(colors.white('Step 4: Compute ¬(A∩B):'));
  console.log(colors.white('¬(A∩B)={1/0.3,2/0.5,3/0.8}'));

  console.log(colors.white('Clearly, (¬A∪¬B)=¬(A∩B)'));

  console.log(colors.cyan('Second Law:'));
  
  console.log(colors.white('Step 1: Compute ¬A∩¬B (intersection = minimum):'));
  console.log(colors.white('¬A∩¬B={1/min (0.2,0.3),2/min (0.4,0.5),3/min (0.6,0.8)}'));
  console.log(colors.white('¬A∩¬B={1/0.2,2/0.4,3/0.6}'));

  console.log(colors.white('Step 2: Compute A∪B (union = maximum):'));
  console.log(colors.white('A∪B={1/max (0.8,0.7),2/max (0.6,0.5),3/max (0.4,0.2)}'));
  console.log(colors.white('A∪B={1/0.8,2/0.6,3/0.4}'));
  
  console.log(colors.white('Step 3: Compute ¬(A∪B):'));
  console.log(colors.white('¬(A∪B)={1/0.2,2/0.4,3/0.6}'));

  console.log(colors.white('Clearly, (¬A∩¬B)=¬(A∪B)'));

  console.log(colors.yellow('Implementation Code:'));
  console.log(colors.white(`
class Set:
    def __init__(self, elements):
        self.elements = elements

    def union(self, other):
        return Set(list(set(self.elements + other.elements)))

    def intersection(self, other):
        return Set(list(set(self.elements) & set(other.elements)))

    def complement(self, universal_set):
        return Set(list(set(universal_set.elements) - set(self.elements)))

    def __str__(self):
        return str(self.elements)


# Example usage:

universal_set = Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
A = Set([1, 2, 3, 4, 5])
B = Set([6, 7, 8, 9, 10])

union_AB = A.union(B)
complement_union_AB = union_AB.complement(universal_set)
print("Union of A and B:", union_AB)
print("Complement of Union of A and B:", complement_union_AB)

complement_A = A.complement(universal_set)
complement_B = B.complement(universal_set)
intersection_complement_AB = complement_A.intersection(complement_B)
print("Intersection of Complements of A and B:", intersection_complement_AB)

print("De-Morgan's Law Verified:", complement_union_AB.elements == intersection_complement_AB.elements)
  `));

  console.log(colors.green('Output:'));
  console.log(colors.white('Union of A and B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]'));
  console.log(colors.white('Complement of Union of A and B: []'));
  console.log(colors.white('Intersection of Complements of A and B: []'));
  console.log(colors.white('De-Morgan\'s Law Verified: True'));
}


function generateCodeFile() {
  const code = `
class Set:
    def __init__(self, elements):
        self.elements = elements

    def union(self, other):
        return Set(list(set(self.elements + other.elements)))

    def intersection(self, other):
        return Set(list(set(self.elements) & set(other.elements)))

    def complement(self, universal_set):
        return Set(list(set(universal_set.elements) - set(self.elements)))

    def __str__(self):
        return str(self.elements)


# Example usage:

universal_set = Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
A = Set([1, 2, 3, 4, 5])
B = Set([6, 7, 8, 9, 10])

union_AB = A.union(B)
complement_union_AB = union_AB.complement(universal_set)
print("Union of A and B:", union_AB)
print("Complement of Union of A and B:", complement_union_AB)

complement_A = A.complement(universal_set)
complement_B = B.complement(universal_set)
intersection_complement_AB = complement_A.intersection(complement_B)
print("Intersection of Complements of A and B:", intersection_complement_AB)

print("De-Morgan's Law Verified:", complement_union_AB.elements == intersection_complement_AB.elements)

  `; 

  const filePath = path.join(process.cwd(), 'sc3.py');
  fs.writeFileSync(filePath, code);
  console.log('✅ sc3.py file created successfully in this directory.');
}


module.exports = { showSC3, generateCodeFile };
