import { empty } from './handlers'

export function toCommand({
  command,
  desc,
  options,
  positional,
  handler
}) {
  return {
    command,
    desc,

  }
}
