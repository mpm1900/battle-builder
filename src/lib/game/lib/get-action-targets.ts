import type { ActionTransaction } from '../types/action'
import type { Actor } from '../types/actor'
import type { Game } from '../types/game'

function getActionTargets(
  game: Game,
  transaction: ActionTransaction,
): Array<Actor> {
  return game.actors.filter((a) =>
    transaction.mutation.targets.predicate(a, transaction.context),
  )
}

export { getActionTargets }
