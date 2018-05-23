import program from 'commander';
import { notImplemented } from '../notImplementedCmd';

program
  .command('create <pkgType>')
  .description('Creates new pkg in zoo based on pkg type.')
  .action(notImplemented);
