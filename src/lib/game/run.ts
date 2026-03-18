import { makeContextFromActor } from './lib/make-context'
import { makeTransaction } from './lib/make-transaction'
import { pushActions } from './store/actions'
import { next } from './store/next'
import { getState } from './store/game'
import { kisame, kisame_modifier } from './data/actors/kisame'
import { itachi, itachi_modifier } from './data/actors/itachi'
import { addExperience, pushActors } from './store/actors'
import { resolveActor } from './lib/resolve-actor'
import { getHealth } from './lib/get-resource'
import { decrementModifierDurations, pushModifiers } from './store/modifiers'
import { getBaseExperience, getExperienceToNextLevel } from './lib/get-level'
import { getActor } from './lib/get-actors'

const kisameContext = makeContextFromActor(kisame, {
  targetActorIDs: [itachi.ID],
})

const itachiContext = makeContextFromActor(itachi, {
  targetActorIDs: [kisame.ID],
})

pushActors([kisame, itachi])
addExperience((a) => a.ID === kisame.ID || a.ID === itachi.ID, 9876)
pushActions([
  makeTransaction(kisame.actions[0], kisameContext),
  makeTransaction(itachi.actions[0], itachiContext),
])

while (next()) {
  // console.log(getState())
}
console.log('done')

pushModifiers([
  makeTransaction(kisame_modifier, makeContextFromActor(kisame)),
  makeTransaction(itachi_modifier, makeContextFromActor(itachi)),
])
decrementModifierDurations()

const a = getActor(getState(), (a) => a.ID === kisame.ID)!
const b = getActor(getState(), (a) => a.ID === itachi.ID)!
console.log(a.hp + a.stamina + a.ninjutsu + a.genjutsu + a.taijutsu + a.speed)
console.log(b.hp + b.stamina + b.ninjutsu + b.genjutsu + b.taijutsu + b.speed)

let actor = resolveActor(getState(), kisame.ID)!
let itachiActor = resolveActor(getState(), itachi.ID)!
console.log(actor)
console.log(itachiActor)
console.log(getHealth(actor))
console.log(getHealth(itachiActor))
//console.log(getState())
