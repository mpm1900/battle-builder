import type { Context } from '../types/context'
import type { Game } from '../types/game'

function getContextTargets(_game: Game, context: Context): Array<string> {
  return (
    context.targetActorIDs
      //
      .concat([])
  ) // todo positions
}

export { getContextTargets }
