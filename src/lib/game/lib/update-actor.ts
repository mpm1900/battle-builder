import type { Actor } from '../types/actor'
import type { Game } from '../types/game'

function updateActors(
  game: Game,
  predicate: (actor: Actor) => boolean,
  updater: (actor: Actor) => Partial<Actor>,
): Game {
  return {
    ...game,
    actors: game.actors.map((actor) =>
      predicate(actor) ? { ...actor, ...updater(actor) } : actor,
    ),
  }
}

function updateActor(
  game: Game,
  actorID: string,
  updater: (actor: Actor) => Partial<Actor>,
): Game {
  return updateActors(
    game,
    (actor) => actor.ID === actorID,
    (a) => updater(a),
  )
}

export { updateActors, updateActor }
