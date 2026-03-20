import type { Game, GameDTO } from '../types/game'
import { resolveActor } from './resolve-actor'
import { serializeResolvedActor } from './serialize-actor'

function serializeGame(game: Game): GameDTO {
  const resolvedActors = game.actors.map(
    (a) => resolveActor(game, a.ID, { cachedActor: a })!,
  )
  return {
    turn: game.turn,
    players: game.players,
    actors: resolvedActors.map((a) => serializeResolvedActor(a)),
    modifiers: game.modifiers,
    actions: game.actions,
    triggers: game.triggers,
    transactions: game.transactions,
    prompts: game.prompts,
  }
}

export { serializeGame }
