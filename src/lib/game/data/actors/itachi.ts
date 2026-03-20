import { nanoid } from 'nanoid'
import type { Actor } from '../../types/actor'
import type { Modifier } from '../../types/modifier'
import { ember } from '../actions/ember'
import { slash } from '../actions/slash'
import { baseActor } from './builders/base-actor'

const modifierID = nanoid()
const itachi_modifier: Modifier = {
  ID: modifierID,
  name: 'Sharingan Pressure First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, genjutsu: a.genjutsu * 2 }),
      filter: (a) => a.ID === itachi_ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const itachi_ID = 'iZbkGV9GUhlxJW4tYGDEQ'
function itachi(): Actor {
  return baseActor(
    { ID: itachi_ID, player_ID: 'player_ONE', name: 'Itachi' },
    {
      level: 5,
      experience: 0,
      action_count: 6,

      ninjutsu: 120,
      taijutsu: 80,
      genjutsu: 155,
      speed: 120,

      hp: 55,
      stamina: 80,

      fire_damage: 1.3,
      fire_resistance: 1.15,
      wind_damage: 1,
      wind_resistance: 1,
      lightning_damage: 1.05,
      lightning_resistance: 1,
      earth_damage: 0.95,
      earth_resistance: 1,
      water_damage: 0.9,
      water_resistance: 0.95,
      yin_damage: 1.35,
      yin_resistance: 1.25,
      yang_damage: 0.95,
      yang_resistance: 0.9,

      natures: ['fire', 'yin'],
      innate_modifiers: [], //[itachi_modifier],
      actions: [slash, ember],
    },
  )
}

export { itachi, itachi_ID }
