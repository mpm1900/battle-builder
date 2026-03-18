import { makeContextFromActor } from './lib/make-context'
import { makeTransaction } from './lib/make-transaction'
import { pushActions } from './store/actions'
import { next } from './store/next'
import { getState } from './store/game'
import { kisame, kisame_modifier } from './data/actors/kisame'
import { addExperience, pushActors } from './store/actors'
import { resolveActor } from './lib/resolve-actor'
import { getHealth } from './lib/get-resource'
import { decrementModifierDurations, pushModifiers } from './store/modifiers'
import { getBaseExperience, getExperienceToNextLevel } from './lib/get-level'

const context = makeContextFromActor(kisame, {
  targetActorIDs: [kisame.ID],
})

pushActors([kisame])
addExperience((a) => a.ID === kisame.ID, 9876)
pushActions([makeTransaction(kisame.actions[0], context)])

while (next()) {
  // console.log(getState())
}

pushModifiers([makeTransaction(kisame_modifier, makeContextFromActor(kisame))])
decrementModifierDurations()

let actor = resolveActor(getState(), kisame.ID)!
console.log(actor)
console.log(getHealth(actor))
console.log(actor.level, actor.experience)
console.log(
  getBaseExperience(actor.level),
  getExperienceToNextLevel(actor.level),
)
//console.log(getState())
