#!/usr/bin/env node

const tcetx = require('../index');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Please provide a command, e.g. `tcetx sc1`");
  process.exit(1);
}

const command = args[0];
console.log(tcetx(command));
