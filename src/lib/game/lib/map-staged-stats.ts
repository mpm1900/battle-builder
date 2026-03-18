import type { Actor, ActorStagedStats } from '../types/actor'

function mapStagedStat(a: Actor, stat: keyof ActorStagedStats, mod = 2) {
  const base = a[stat]
  const stage = a[`${stat}Stage`]
  if (stage === 0) return base

  if (stage > 0) return Math.floor(base * ((stage + mod) / mod))
  return Math.floor(base * (mod / (-1 * stage + mod)))
}

function mapStagedStats(a: Actor): Actor {
  return {
    ...a,
    genjutsu: mapStagedStat(a, 'genjutsu'),
    ninjutsu: mapStagedStat(a, 'ninjutsu'),
    taijutsu: mapStagedStat(a, 'taijutsu'),
    speed: mapStagedStat(a, 'speed'),
  }
}

export { mapStagedStats }
