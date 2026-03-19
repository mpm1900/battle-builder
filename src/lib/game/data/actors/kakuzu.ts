import { nanoid } from 'nanoid'
import type { Actor } from '../../types/actor'
import type { Modifier } from '../../types/modifier'
import { NATURES } from '../../types/natures'
import { slash } from '../actions/slash'

const modifierID = nanoid()
const kakuzu_modifier: Modifier = {
  ID: modifierID,
  name: 'Earth Spear First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, earthResistance: a.earthResistance * 1.5 }),
      filter: (a) => a.ID === kakuzu.ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const kakuzu: Actor = {
  ID: nanoid(),
  playerID: nanoid(),
  name: 'Kakuzu',
  resolved: false,

  level: 5,
  experience: 0,

  // Main stats (Pokémon-style controlled spread)
  ninjutsu: 122,
  taijutsu: 102,
  genjutsu: 40,
  speed: 68,

  hp: 128,
  stamina: 134,

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

  // Utility / combat feel
  evasion: 0,
  accuracy: 1,
  critical: 1.5,

  // Element identity: multi-heart user with wind/lightning/earth focus
  fireDamage: 1.05,
  fireResistance: 1.05,
  windDamage: 1.2,
  windResistance: 1.15,
  lightningDamage: 1.18,
  lightningResistance: 1.1,
  earthDamage: 1.22,
  earthResistance: 1.28,
  waterDamage: 0.95,
  waterResistance: 0.95,
  yinDamage: 0.9,
  yinResistance: 0.9,
  yangDamage: 1.1,
  yangResistance: 1.2,

  active: true,
  alive: true,

  natures: ['wind', 'earth'],
  innateModifiers: [], //[kakuzu_modifier],
  actions: [slash],
}

export { kakuzu, kakuzu_modifier }
