import { nanoid } from 'nanoid'
import type { Actor } from '../../types/actor'
import type { Modifier } from '../../types/modifier'
import { ember } from '../actions/ember'
import { slash } from '../actions/slash'

const modifierID = nanoid()
const itachi_modifier: Modifier = {
  ID: modifierID,
  name: 'Sharingan Pressure First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, genjutsu: a.genjutsu * 2 }),
      filter: (a) => a.ID === itachi.ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const itachi: Actor = {
  ID: nanoid(),
  playerID: nanoid(),
  name: 'Itachi',
  resolved: false,

  level: 5,
  experience: 0,

  // Main stats (Pokémon-style controlled spread)
  ninjutsu: 120,
  taijutsu: 80,
  genjutsu: 155,
  speed: 120,

  hp: 55,
  stamina: 80,

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

  // Element identity: fire + yin specialist, less sustained vitality than bruisers
  fireDamage: 1.3,
  fireResistance: 1.15,
  windDamage: 1,
  windResistance: 1,
  lightningDamage: 1.05,
  lightningResistance: 1,
  earthDamage: 0.95,
  earthResistance: 1,
  waterDamage: 0.9,
  waterResistance: 0.95,
  yinDamage: 1.35,
  yinResistance: 1.25,
  yangDamage: 0.95,
  yangResistance: 0.9,

  active: true,
  alive: true,

  natures: ['fire', 'yin'],
  innateModifiers: [], //[itachi_modifier],
  actions: [slash, ember],
}

export { itachi, itachi_modifier }
