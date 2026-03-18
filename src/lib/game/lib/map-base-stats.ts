import type { Actor, ActorStats } from '../types/actor'

function mapHp(a: Actor): number {
  const base = a.hp
  const baseTerm = (base + 15) * 2
  const evTerm = 0
  const ratio = Math.floor(((baseTerm + evTerm) * a.level) / 100)
  return ratio + a.level + 10
}

function mapStat(a: Actor, stat: keyof ActorStats) {
  const base = a[stat]
  const baseTerm = (base + 15) * 2
  const evTerm = 0
  const ratio = Math.floor(((baseTerm + evTerm) * a.level) / 100)
  return ratio + 5
}

function mapBaseStats(a: Actor): Actor {
  return {
    ...a,
    hp: mapHp(a),
    stamina: mapStat(a, 'stamina'),

    genjutsu: mapStat(a, 'genjutsu'),
    ninjutsu: mapStat(a, 'ninjutsu'),
    taijutsu: mapStat(a, 'taijutsu'),
    speed: mapStat(a, 'speed'),
  }
}

export { mapBaseStats }
