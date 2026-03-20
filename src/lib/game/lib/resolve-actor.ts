import {
  PRIORITIES,
  type Actor,
  type ResolvedActor,
  type ResolvedActorBaseStats,
} from '../types/actor'
import type { Game } from '../types/game'
import type { ModifierTransaction } from '../types/modifier'
import { getActor } from './get-actors'
import { getModifiers } from './get-modifiers'
import { makeContextFromActor } from './make-context'
import { makeTransaction } from './make-transaction'
import { mapBaseStats } from './map-base-stats'
import { mapStagedStats } from './map-staged-stats'
import { resolveTransaction } from './resolve-transaction'
import { sortPriority } from './sort-priority'

const SPECIAL_MUTATIONS: ModifierTransaction['mutation']['mutations'] = [
  // mapBaseStats
  {
    delta: (a) => mapBaseStats(a),
    priority: PRIORITIES.MAP_BASE_STATS,
    modifierID: null,
  },
  // mapStagedStats
  {
    delta: (a) => mapStagedStats(a),
    priority: PRIORITIES.MAP_STAGED_STATS,
    modifierID: null,
  },
]

function getBaseStats(actor: Actor): ResolvedActorBaseStats {
  return {
    base_accuracy: actor.accuracy,
    base_evasion: actor.evasion,
    base_genjutsu: actor.genjutsu,
    base_hp: actor.hp,
    base_ninjutsu: actor.ninjutsu,
    base_speed: actor.speed,
    base_stamina: actor.stamina,
    base_taijutsu: actor.taijutsu,
  }
}

function resolveActor(
  game: Game,
  actorID: string | undefined,
  options: {
    cachedActor?: Actor
    cachedModifiers?: Array<ModifierTransaction>
  } = {},
): ResolvedActor | undefined {
  const actor = options.cachedActor ?? getActor(game, (a) => a.ID === actorID)
  if (!actor) return undefined

  const context = makeContextFromActor(actor)
  const modifiers = options.cachedModifiers ?? getModifiers(game)
  const appliedModifiers: Set<string> = new Set()
  const mutations = modifiers.flatMap((m) => m.mutation.mutations)
  const sorted = sortPriority(mutations.concat(SPECIAL_MUTATIONS))
  const resolved = sorted.reduce((a, mutation) => {
    const transaction = makeTransaction(mutation, context)
    return resolveTransaction(a, transaction, {
      fallback: a,
      onSuccess: () => {
        if (mutation.modifierID) {
          appliedModifiers.add(mutation.modifierID)
        }
      },
    })
  }, actor)

  console.log(actor)
  return {
    ...resolved,
    ...getBaseStats(actor),
    resolved: true,
    applied_modifiers: Array.from(appliedModifiers),
  }
}

export { resolveActor }
