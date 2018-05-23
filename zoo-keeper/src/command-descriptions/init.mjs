import program from 'commander';
import { notImplemented } from '../notImplementedCmd';

program
  .command('init')
  .description('Initialize zoo in a current directory.')
  .action(notImplemented);
