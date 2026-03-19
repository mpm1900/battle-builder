import { nanoid } from 'nanoid'
import type { Actor } from '../../types/actor'
import type { Modifier } from '../../types/modifier'
import { slash } from '../actions/slash'
import { ember } from '../actions/ember'
import { chidori } from '../actions/chidori'

const modifierID = nanoid()
const sasuke_modifier: Modifier = {
  ID: modifierID,
  name: 'Sharingan Tempo First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, speed: a.speed * 1.25 }),
      filter: (a) => a.ID === sasuke.ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const sasuke: Actor = {
  ID: nanoid(),
  playerID: nanoid(),
  name: 'Sasuke',
  resolved: false,

  level: 5,
  experience: 0,

  // Main stats (Pokémon-style controlled spread)
  ninjutsu: 116,
  taijutsu: 96,
  genjutsu: 90,
  speed: 118,

  hp: 86,
  stamina: 94,

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

  // Element identity: fire + lightning specialist
  fireDamage: 1.18,
  fireResistance: 1.1,
  windDamage: 1,
  windResistance: 0.95,
  lightningDamage: 1.24,
  lightningResistance: 1.2,
  earthDamage: 0.95,
  earthResistance: 1,
  waterDamage: 0.92,
  waterResistance: 0.9,
  yinDamage: 1.05,
  yinResistance: 1,
  yangDamage: 1.02,
  yangResistance: 0.98,

  active: true,
  alive: true,

  natures: ['fire', 'lightning'],
  innateModifiers: [], //[sasuke_modifier],
  actions: [slash, ember, chidori],
}

export { sasuke, sasuke_modifier }
