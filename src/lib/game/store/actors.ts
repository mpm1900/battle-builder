import { getLevel } from '../lib/get-level'
import type { Actor } from '../types/actor'
import { setState } from './game'

function pushActors(actors: Array<Actor>) {
  setState((prev) => ({
    actors: prev.actors.concat(actors),
  }))
}

function updateActors(
  predicate: (actor: Actor) => boolean,
  fn: (actor: Actor) => Actor,
) {
  setState((prev) => ({
    actors: prev.actors.map((actor) => (predicate(actor) ? fn(actor) : actor)),
  }))
}

function addExperience(
  predicate: (actor: Actor) => boolean,
  experience: number,
) {
  updateActors(predicate, (a) => ({
    ...a,
    experience: a.experience + experience,
    level: getLevel(a.experience + experience),
  }))
}

export { pushActors, updateActors, addExperience }
