import { empty } from '../handlers';
import addCmd    from './types-descriptions/add';
import listCmd     from './types-descriptions/list';

export default {
  command: 'types <subcommand> [args..]',
  desc: 'Manage pkg types in zoo',
  builder: ya => ya
    .command(addCmd)
    .command(listCmd),
  handler: empty
}
