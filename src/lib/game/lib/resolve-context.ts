import type { ResolvedActor } from '../types/actor'
import type { Context } from '../types/context'
import type { Game } from '../types/game'
import { getModifiers } from './get-modifiers'
import { getContextTargets } from './get-context-targets'
import { resolveActor } from './resolve-actor'

type ResolveContextResult = {
  sourceActor: ResolvedActor | undefined
  targetActors: Array<ResolvedActor>
}

function resolveContext(game: Game, context: Context): ResolveContextResult {
  const modifiers = getModifiers(game)
  const targets = getContextTargets(game, context)
  return {
    sourceActor: resolveActor(game, context.sourceActorID, {
      cachedModifiers: modifiers,
    }),
    targetActors: targets
      .map((actorID) =>
        resolveActor(game, actorID, { cachedModifiers: modifiers }),
      )
      .filter((a) => a !== undefined),
  }
}

export { resolveContext }
