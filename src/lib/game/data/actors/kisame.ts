import { nanoid } from 'nanoid'
import type { Actor } from '../../types/actor'
import { slash } from '../actions/slash'
import type { Modifier } from '../../types/modifier'
import { surf } from '../actions/surf'
import { baseActor } from './builders/base-actor'

const modifierID = nanoid()
const kisame_modifier: Modifier = {
  ID: modifierID,
  name: 'Chakra Surge First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, stamina: a.stamina * 2 }),
      filter: (a) => a.ID === kisame_ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const kisame_ID = 'Onfui2b0eQOmid_3KGjyA'
function kisame(): Actor {
  return baseActor(
    { ID: kisame_ID, player_ID: 'player_ONE', name: 'Kisame' },
    {
      level: 5,
      experience: 0,
      action_count: 5,

      ninjutsu: 124,
      taijutsu: 108,
      genjutsu: 52,
      speed: 88,

      hp: 112,
      stamina: 126,

      fire_damage: 0.9,
      fire_resistance: 1.15,
      wind_damage: 0.95,
      wind_resistance: 1,
      lightning_damage: 0.85,
      lightning_resistance: 0.85,
      earth_damage: 1,
      earth_resistance: 1,
      water_damage: 1.35,
      water_resistance: 1.3,
      yin_damage: 0.9,
      yin_resistance: 0.95,
      yang_damage: 1.15,
      yang_resistance: 1.2,

      natures: ['water', 'yang'],
      innate_modifiers: [], //[kisame_modifier],
      actions: [slash, surf],
    },
  )
}

export { kisame, kisame_ID, kisame_modifier }
