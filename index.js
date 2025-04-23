#!/usr/bin/env node
// index.js

const args = process.argv.slice(2);
// index.js
const { listExperiments } = require('./commands/list'); // Import the list command


// Handle "code file" generation for each experiment
if (args[1] === 'code' && args[2] === 'file') {
  switch (args[0]) {
    case 'sc1':
      require('./commands/sc1').generateCodeFile();
      break;
    case 'sc2':
      require('./commands/sc2').generateCodeFile();
      break;
    case 'sc3':
      require('./commands/sc3').generateCodeFile();
      break;
    case 'sc4':
      require('./commands/sc4').generateCodeFile();
      break;
    case 'sc5':
      require('./commands/sc5').generateCodeFile();
      break;
    case 'sc6':
      require('./commands/sc6').generateCodeFile();
      break;
    case 'sc7':
      require('./commands/sc7').generateCodeFile();
      break;
    case 'sc8':
      require('./commands/sc8').generateCodeFile();
      break;
    default:
      console.log('❌ Unknown command for code generation.');
  }
  process.exit(0);
}



switch (args[0]) {
  case 'sc1':
    require('./commands/sc1').showSC1();
    process.exit(0);
  case 'sc2':
    require('./commands/sc2').showSC2();
    process.exit(0);
  case 'sc3':
    require('./commands/sc3').showSC3();
    process.exit(0);
  case 'sc4':
    require('./commands/sc4').showSC4();
    process.exit(0);
  case 'sc5':
    require('./commands/sc5').showSC5();
    process.exit(0);
  case 'sc6':
    require('./commands/sc6').showSC6();
    process.exit(0);
  case 'sc7':
    require('./commands/sc7').showSC7();
    process.exit(0);
  case 'sc8':
    require('./commands/sc8').showSC8();
    process.exit(0);
  case 'help':
    require('./commands/help').showHelp();
    process.exit(0);
  case 'list':  // Add this case to handle the 'list' command
    listExperiments();
    break;
  default:
    console.log('❌ Unknown command.\nType tcetx help to see available commands.');
}