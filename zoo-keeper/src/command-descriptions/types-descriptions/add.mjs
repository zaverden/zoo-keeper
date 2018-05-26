import { notImplemented } from '../../handlers';

export default {
  command: 'add <pkgType>',
  desc: 'Adds new pkg type to zoo',
  builder: ya => ya.positional(
    'pkgType', {
      type: 'string',
      description: 'Name of new type'
    }
  ),
  handler: notImplemented
}
