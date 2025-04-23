const kleur = require('kleur');

function showHelp() {
  console.log(kleur.bold().cyan('\n🧪 TCETX - Practical CLI Helper\n'));
  console.log(kleur.yellow('Usage: ') + 'npx tcetx <command>\n');

  console.log(kleur.green('Available Commands:'));
  console.log(kleur.bold('  help') + '    Show this help menu');
  console.log(kleur.bold('  list') + '    Show all experiment list');
  console.log(kleur.bold('  sc1') + '     Shows Practical Content of respective experiment');
  console.log(kleur.bold('  sc1 code') + '     Generates a file containting code of respective experiment\n');
}

module.exports = { showHelp };
