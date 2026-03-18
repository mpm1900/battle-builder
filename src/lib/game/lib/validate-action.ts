import type { ActionTransaction } from '../types/action'
import type { Game } from '../types/game'
import { checkTransaction } from './resolve-transaction'

function validateAction(game: Game, transaction: ActionTransaction) {
  const valid = checkTransaction(game, transaction)
  const targetsValid = transaction.mutation.targets.validate(
    transaction.context,
  )
  console.log(valid, targetsValid)
  return valid && targetsValid
}

export { validateAction }
