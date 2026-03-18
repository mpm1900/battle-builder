import type { Actor } from '../types/actor'
import type { Game } from '../types/game'

function getActors<T = Actor>(
  game: Game,
  predicate: (actor: Actor) => boolean,
  map?: (actor: Actor) => T,
) {
  const actors = game.actors.filter(predicate)

  if (map) {
    return actors.map((actor) => (map ? map(actor) : actor))
  }

  return actors
}

function getActor<T = Actor>(
  game: Game,
  predicate: (actor: Actor) => boolean,
  map?: (actor: Actor) => T,
) {
  const actor = game.actors.find(predicate)

  if (!actor) {
    return undefined
  }

  if (map) {
    return map(actor)
  }

  return actor
}

export { getActors, getActor }
