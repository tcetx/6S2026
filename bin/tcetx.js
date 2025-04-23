#!/usr/bin/env node
require('../index');


const { cyan, yellow, green, red, magenta, blue, gray, bold } = require('colorette'); // Import specific styles from colorette

const args = process.argv.slice(2);
const command = args[0];

const showHelp = () => {
  console.log(bold(cyan("\n🧪 TCETX - Practical CLI Helper\n")));
  console.log(green("Usage:"));
  console.log("  " + yellow("tcetx <subject-code><experiment-number>") + gray(" → shows full experiment"));
  console.log("  " + yellow("tcetx <subject-code><experiment-number> <section>") + gray(" → shows a specific section"));
  console.log("  " + yellow("tcetx help") + gray(" → shows this help message"));
  console.log("\n" + magenta("Examples:"));
  console.log("  " + blue("tcetx sc1"));
  console.log("  " + blue("tcetx sc2 code"));
  console.log("  " + blue("tcetx help") + "\n");
};

const handleCommand = (cmd) => {
  if (!cmd || cmd === "help") {
    showHelp();
    return;
  }

  const validCommands = ["sc1", "sc2"]; // Extend this later
  if (validCommands.includes(cmd)) {
    console.log(green(`\n📘 Output for ${cmd}: Coming soon...\n`));
  } else {
    console.log(red(bold("\n❌ Unknown command.")));
    console.log(gray("Type ") + yellow("tcetx help") + gray(" to see available commands.\n"));
  }
};

handleCommand(command);
