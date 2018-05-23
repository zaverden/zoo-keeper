import program from 'commander';
import { notImplemented } from '../notImplementedCmd';

program
  .command('run <script> [args...]')
  .description('Executes `yarn run <script>` in selected zoo pkgs.')
  .action(notImplemented);
