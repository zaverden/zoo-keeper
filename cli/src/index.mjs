import 'make-promises-safe';
import yargs from 'yargs';
import initCmd    from './command-descriptions/init';
import runCmd     from './command-descriptions/run';
import execCmd    from './command-descriptions/exec';
import typesCmd   from './command-descriptions/types';
import createCmd  from './command-descriptions/create';

yargs
  .command(
    '$0 <command> [subcommand] [args...]',
    false, // no description for root ,
    ya => ya
      .command(initCmd)
      .command(runCmd)
      .command(execCmd)
      .command(typesCmd)
      .command(createCmd)
  )
  .help()
  .argv


