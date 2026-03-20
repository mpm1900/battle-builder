import { nanoid } from 'nanoid'
import type { Actor } from '../../types/actor'
import type { Modifier } from '../../types/modifier'
import { slash } from '../actions/slash'
import { ember } from '../actions/ember'
import { chidori } from '../actions/chidori'
import { baseActor } from './builders/base-actor'

const modifierID = nanoid()
const sasuke_modifier: Modifier = {
  ID: modifierID,
  name: 'Sharingan Tempo First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, speed: a.speed * 1.25 }),
      filter: (a) => a.ID === sasuke_ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const sasuke_ID = 'Pp6NEFEIffZADbe83uzzN'
function sasuke(): Actor {
  return baseActor(
    { ID: sasuke_ID, player_ID: 'player_ONE', name: 'Sasuke' },
    {
      level: 5,
      experience: 0,
      action_count: 6,

      ninjutsu: 116,
      taijutsu: 96,
      genjutsu: 90,
      speed: 118,

      hp: 86,
      stamina: 94,

      fire_damage: 1.18,
      fire_resistance: 1.1,
      wind_damage: 1,
      wind_resistance: 0.95,
      lightning_damage: 1.24,
      lightning_resistance: 1.2,
      earth_damage: 0.95,
      earth_resistance: 1,
      water_damage: 0.92,
      water_resistance: 0.9,
      yin_damage: 1.05,
      yin_resistance: 1,
      yang_damage: 1.02,
      yang_resistance: 0.98,

      natures: ['fire', 'lightning'],
      innate_modifiers: [], //[sasuke_modifier],
      actions: [slash, ember, chidori],
    },
  )
}

export { sasuke, sasuke_modifier }
