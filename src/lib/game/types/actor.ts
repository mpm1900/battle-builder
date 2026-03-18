import type { Action } from './action'
import type { Context } from './context'
import type { Modifier } from './modifier'
import type { Mutation } from './mutation'
import type { Nature } from './natures'

type ActorAttackStats = {
  ninjutsu: number
  genjutsu: number
  taijutsu: number
}
type ActorStagedStats = ActorAttackStats & {
  speed: number
  evasion: number
  accuracy: number
}
type ActorResources = {
  hp: number
  stamina: number
}
type ActorMaxResources = {
  [key in `max${Capitalize<keyof ActorResources>}`]: number
}
type ActorMaxResourceOffets = {
  [key in `${keyof ActorResources}Offset`]: number
}

type ActorNatureDamageStats = {
  [key in `${Nature}Damage`]: number
}

type ActorNatureResistanceStats = {
  [key in `${Nature}Resistance`]: number
}

type ActorStats = ActorNatureDamageStats &
  ActorNatureResistanceStats &
  ActorStagedStats &
  ActorResources &
  ActorMaxResources &
  ActorMaxResourceOffets & {
    critical: number
  }

type ActorStatsStages = {
  [key in `${keyof ActorStagedStats}Stage`]: number
}

type ActorState = {
  active: boolean
  alive: boolean
}

type Actor = ActorStats &
  ActorStatsStages &
  ActorState & {
    ID: string
    playerID: string
    name: string
    resolved: false

    level: number
    experience: number

    natures: Array<Nature>
    innateModifiers: Array<Modifier>
    actions: Array<Action>
  }

type ResolvedActor = Omit<Actor, 'resolved'> & {
  resolved: true
  appliedModifiers: Array<string>
}

type ActorMutation = Mutation<Actor, Actor, Context>

const PRIORITIES = {
  PRE_BASE_STATS: -11,
  MAP_BASE_STATS: -10,
  POST_BASE_STATS: -9,
  DEFAULT: 0,
  PRE_STAGED_STATS: 9,
  MAP_STAGED_STATS: 10,
  POST_STAGED_STATS: 11,
  ZERO: 19,
  SET: 20,
} as const

export type {
  ActorAttackStats,
  ActorStagedStats,
  ActorStats,
  ActorState,
  Actor,
  ResolvedActor,
  ActorMutation,
  ActorResources,
  ActorMaxResourceOffets,
}
export { PRIORITIES }
