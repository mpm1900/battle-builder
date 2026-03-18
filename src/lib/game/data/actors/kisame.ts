import { nanoid } from 'nanoid'
import type { Actor } from '../../types/actor'
import { slash } from '../actions/slash'
import type { Modifier } from '../../types/modifier'
import { NATURES } from '../../types/natures'
import { surf } from '../actions/surf'

const modifierID = nanoid()
const kisame_modifier: Modifier = {
  ID: modifierID,
  name: 'Chakra Surge First Turn',
  mutations: [
    {
      modifierID: modifierID,
      delta: (a) => ({ ...a, stamina: a.stamina * 2 }),
      filter: (a) => a.ID === kisame.ID,
    },
  ],
  triggers: [],
  duration: 1,
}

const kisame: Actor = {
  ID: nanoid(),
  playerID: nanoid(),
  name: 'Kisame',
  resolved: false,

  level: 5,
  experience: 0,

  // Main stats (Pokemon-style controlled spread)
  ninjutsu: 124,
  taijutsu: 108,
  genjutsu: 52,
  speed: 88,

  hp: 112,
  stamina: 126,

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

  // Element identity: water specialist, high vitality, lightning vulnerability
  fireDamage: 0.9,
  fireResistance: 1.15,
  windDamage: 0.95,
  windResistance: 1,
  lightningDamage: 0.85,
  lightningResistance: 0.85,
  earthDamage: 1,
  earthResistance: 1,
  waterDamage: 1.35,
  waterResistance: 1.3,
  yinDamage: 1,
  yinResistance: 1,
  yangDamage: 1,
  yangResistance: 1.1,

  active: true,
  alive: true,

  natures: NATURES.water,
  innateModifiers: [], //[kisame_modifier],
  actions: [slash, surf],
}

export { kisame, kisame_modifier }
