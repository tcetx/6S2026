const fs = require('fs');
const path = require('path');

function showSC7() {
  console.log(`📘 Experiment 07: Implementation of Simple Genetic Algorithm

🎯 Learning Objective:
Implementation of Simple Genetic Algorithm.

🛠️ Tools:
Python

📖 Theory:
One example of a simple genetic application is the breeding of plants and animals to produce desirable traits. This process is often referred to as selective breeding or artificial selection.

In selective breeding, individuals with desirable traits are chosen to breed and produce offspring with those desirable traits. Over time, this can lead to the development of new varieties or breeds of plants and animals that exhibit specific characteristics.

For example, farmers may selectively breed cows for increased milk production or selectively breed crops for greater resistance to pests or drought. Similarly, dog breeders may selectively breed dogs for specific physical and behavioral traits.

This process is similar to natural selection, where certain traits that are advantageous for survival and reproduction become more common in a population over time. However, in selective breeding, humans are deliberately choosing which traits to promote and which to eliminate, rather than relying on natural selection.

The use of genetic engineering is another example of a genetic application. Genetic engineering involves manipulating the DNA of an organism to introduce new traits or modify existing ones. This can be done by inserting or deleting genes, or by altering the expression of existing genes.

For example, scientists may use genetic engineering to create crops that are more resistant to pests or produce higher yields, or to create bacteria that can produce useful chemicals or enzymes. Genetic engineering is also used in medical research to create new treatments for genetic diseases or to develop vaccines.

📌 Algorithm:
1. Select Np individuals from the previous population.
2. Create the mating pool randomly.
3. Perform Crossover.
4. Perform Mutation in offspring solutions.
5. Perform inversion in offspring solutions.
6. Replace the old solutions of the last generation with the newly created solutions and go to step (2).

💻 Implementation Code:
Use the command 👉 tcetx sc7 code file 👈 to generate the Python file with the full code.`);
}

function generateCodeFile() {
  const code = `import random

# Fitness function: maximize the sum of individual's genes
def fitness(individual):
    return sum(individual)

# Genetic algorithm parameters
POPULATION_SIZE = 10
INDIVIDUAL_SIZE = 5
MUTATION_RATE = 0.1
GENERATIONS = 10

# Initialize population with random individuals
population = [[random.randint(0, 1) for _ in range(INDIVIDUAL_SIZE)] for _ in range(POPULATION_SIZE)]

for generation in range(GENERATIONS):
    # Select fittest individuals
    population = sorted(population, key=fitness, reverse=True)[:POPULATION_SIZE//2]

    # Create offspring
    offspring = []
    while len(offspring) < POPULATION_SIZE//2:
        parent1, parent2 = random.sample(population, 2)
        child = parent1[:len(parent1)//2] + parent2[len(parent2)//2:]
        offspring.append(child)

    # Mutate offspring
    for i in range(len(offspring)):
        if random.random() < MUTATION_RATE:
            mutation_point = random.randint(0, INDIVIDUAL_SIZE-1)
            offspring[i][mutation_point] = 1 - offspring[i][mutation_point]

    # Replace least fit individuals with offspring
    population += offspring

    # Print fittest individual
    fittest = max(population, key=fitness)
    print(f"Generation {generation+1}, Fittest: {fittest}, Fitness: {fitness(fittest)}")

print(f"Fittest individual: {max(population, key=fitness)}")
`;

  const filePath = path.join(process.cwd(), 'sc7.py');
  fs.writeFileSync(filePath, code);
  console.log('✅ sc7.py file created successfully in this directory.');
}

module.exports = { showSC7, generateCodeFile };
