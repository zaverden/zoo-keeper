import 'make-promises-safe';
import program from 'commander';
import zooPkg from '../package.json'
import './command-descriptions/init';
import './command-descriptions/run';
import './command-descriptions/exec';
import './command-descriptions/types';
import './command-descriptions/create';

program
  .version(zooPkg.version);

// Syntax error -> show CLI help
if (process.argv.length <= 2) program.outputHelp();

// Let's go!
program.parse(process.argv);
