import program from 'commander';
import { notImplemented } from '../notImplementedCmd';

program
  .command('exec <cmd>')
  .description('Executes a provided command in selected zoo pkgs.')
  .action(notImplemented);
