import program from 'commander';
import { notImplemented } from '../notImplementedCmd';

const typesCmd = program
  .command('types')
  .description('Manage pkg types in zoo.');

typesCmd
  .command('help')
  .description('help')
  .action(() => console.log(123));

typesCmd
  .command('list')
  .description('Lists all pkg types in zoo.')
  .action(notImplemented);

typesCmd
  .command('add <pkgType>')
  .description('Adds new pkg type to zoo.')
  .action(notImplemented);
