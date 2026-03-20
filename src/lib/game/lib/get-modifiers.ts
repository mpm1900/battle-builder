import type { Game } from '../types/game'
import type { ModifierTransaction } from '../types/modifier'
import { getActors } from './get-actors'
import { makeContext } from './make-context'
import { makeTransaction } from './make-transaction'

function getModifiers(
  game: Game,
  predicate?: (modifier: ModifierTransaction) => boolean,
) {
  const activeActors = getActors(game, (a) => a.active)
  const actorModifiers = activeActors.flatMap((a) =>
    a.innate_modifiers.map((modifier) =>
      makeTransaction(
        modifier,
        makeContext({
          sourcePlayerID: a.player_ID,
          sourceActorID: a.ID,
        }),
      ),
    ),
  )

  const allModifieres = game.modifiers.concat(actorModifiers)

  if (!predicate) return allModifieres
  return allModifieres.filter(predicate)
}

export { getModifiers }
