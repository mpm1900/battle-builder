import type { ActionTransaction } from '../types/action'
import type { Context } from '../types/context'
import type { Game } from '../types/game'
import { getActor } from './get-actors'
import { checkTransaction } from './resolve-transaction'

function validateContext(game: Game, context: Context): boolean {
  const source = getActor(game, (a) => a.ID === context.sourceActorID)
  return !!source?.alive
}

function validateAction(game: Game, transaction: ActionTransaction) {
  const valid = checkTransaction(game, transaction)
  const contextValid = validateContext(game, transaction.context)
  const targetsValid = transaction.mutation.targets.validate(
    transaction.context,
  )
  console.log(valid, contextValid, targetsValid)
  return valid && contextValid && targetsValid
}

export { validateAction }
