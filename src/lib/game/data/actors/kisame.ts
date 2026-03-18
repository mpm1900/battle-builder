import { nanoid } from 'nanoid'
import { PRIORITIES, type Actor } from '../../types/actor'
import { slash } from '../actions/slash'
import type { Modifier } from '../../types/modifier'

const modifierID = nanoid()
const kisame_modifier: Modifier = {
  ID: modifierID,
  name: 'Double Speed First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, ninjutsu: a.ninjutsu * 2 }),
      filter: (a) => a.ID === kisame.ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const kisame: Actor = {
  ID: nanoid(),
  playerID: nanoid(),
  name: 'kisame',
  resolved: false,

  level: 5,
  experience: 0,

  ninjutsu: 95,
  taijutsu: 134,
  genjutsu: 95,
  speed: 61,

  hp: 100,
  stamina: 100,

  hpOffset: 0,
  staminaOffset: 0,

  maxHp: 1,
  maxStamina: 1,

  genjutsuStage: 0,
  ninjutsuStage: 0,
  taijutsuStage: 0,
  speedStage: 0,
  evasionStage: 0,
  accuracyStage: 0,

  evasion: 0,
  accuracy: 1,
  critical: 1.5,

  fireDamage: 1,
  fireResistance: 1,
  windDamage: 1,
  windResistance: 1,
  lightningDamage: 1,
  lightningResistance: 1,
  earthDamage: 1,
  earthResistance: 1,
  waterDamage: 1,
  waterResistance: 1,
  yinDamage: 1,
  yinResistance: 1,
  yangDamage: 1,
  yangResistance: 1,

  active: true,
  alive: true,

  innateModifiers: [], //[kisame_modifier],
  actions: [slash],
}

export { kisame, kisame_modifier }
