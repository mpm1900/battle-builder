import { nanoid } from 'nanoid'
import type { Actor } from '../../types/actor'
import type { Modifier } from '../../types/modifier'
import { slash } from '../actions/slash'
import { baseActor } from './builders/base-actor'

const modifierID = nanoid()
const kakuzu_modifier: Modifier = {
  ID: modifierID,
  name: 'Earth Spear First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, earthResistance: a.earth_resistance * 1.5 }),
      filter: (a) => a.ID === kakuzu_ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const kakuzu_ID = 'GqS_BsUgj5HH4hKH8G2eq'
function kakuzu(): Actor {
  return baseActor(
    { ID: kakuzu_ID, player_ID: 'player_ONE', name: 'Kakuzu' },
    {
      level: 5,
      experience: 0,
      action_count: 6,

      ninjutsu: 122,
      taijutsu: 102,
      genjutsu: 40,
      speed: 68,
      hp: 128,
      stamina: 134,

      fire_damage: 1.05,
      fire_resistance: 1.05,
      wind_damage: 1.2,
      wind_resistance: 1.15,
      lightning_damage: 1.18,
      lightning_resistance: 1.1,
      earth_damage: 1.22,
      earth_resistance: 1.28,
      water_damage: 0.95,
      water_resistance: 0.95,
      yin_damage: 0.9,
      yin_resistance: 0.9,
      yang_damage: 1.1,
      yang_resistance: 1.2,

      natures: ['wind', 'earth'],
      innate_modifiers: [], //[kakuzu_modifier],
      actions: [slash],
    },
  )
}

export { kakuzu, kakuzu_modifier }
