import type { Action, ActionDTO } from './action'
import type { Context } from './context'
import type { Modifier } from './modifier'
import type { Mutation } from './mutation'
import type { Nature, NatureSet } from './natures'

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
type ActorBaseStats = ActorStagedStats & ActorResources
type ActorMaxResources = {
  [key in `max_${keyof ActorResources}`]: number
}
type ActorMaxResourceOffets = {
  [key in `${keyof ActorResources}_offset`]: number
}

type ActorNatureDamageStats = {
  [key in `${Nature}_damage`]: number
}

type ActorNatureResistanceStats = {
  [key in `${Nature}_resistance`]: number
}

type ActorStats = ActorNatureDamageStats &
  ActorNatureResistanceStats &
  ActorBaseStats &
  ActorMaxResources &
  ActorMaxResourceOffets & {
    critical: number
  }

type ActorStatsStages = {
  [key in `${keyof ActorStagedStats}_stage`]: number
}

type ActorState = {
  active: boolean
  alive: boolean
}

type Actor = ActorStats &
  ActorStatsStages &
  ActorState & {
    ID: string
    player_ID: string
    name: string
    resolved: false

    level: number
    experience: number
    action_count: number

    natures: Array<NatureSet>
    innate_modifiers: Array<Modifier>
    actions: Array<Action>
  }

type ActorDTO = Omit<Actor, 'actions' | 'innate_modifiers'> & {
  actions: Array<ActionDTO>
}

type ResolvedActorBaseStats = {
  [key in `base_${keyof ActorBaseStats}`]: number
}
type ResolvedActor = Omit<Actor, 'resolved'> &
  ResolvedActorBaseStats & {
    resolved: true
    applied_modifiers: Array<string>
  }

type ResolvedActorDTO = Omit<ResolvedActor, 'actions' | 'innate_modifiers'> & {
  actions: Array<ActionDTO>
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
  ActorBaseStats,
  ActorStats,
  ActorState,
  Actor,
  ActorDTO,
  ResolvedActorDTO,
  ResolvedActor,
  ResolvedActorBaseStats,
  ActorMutation,
  ActorResources,
  ActorMaxResourceOffets,
}
export { PRIORITIES }
