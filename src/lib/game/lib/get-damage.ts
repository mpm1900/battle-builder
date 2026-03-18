import type { ActorAttackStats, ResolvedActor } from '../types/actor'
import type { Nature } from '../types/natures'

function getDamageEq(config: {
  attack: number
  critical?: number
  defense: number
  level: number
  power: number
  natures?: number
  random?: number
  targets?: number
  other?: number
  offset?: number
}) {
  const {
    attack,
    critical = 1,
    defense,
    level,
    power,
    natures = 1,
    targets = 1,
    random = 1,
    other = 1,
    offset = 0,
  } = config
  const level_mod = (2 * level) / 5 + 2
  const pow_ad = (attack / defense) * power
  const term_1 = (level_mod * pow_ad) / 50 + 2
  const raw = term_1 * critical * targets * natures * random * other + offset

  return Math.floor(raw)
}

function getDamage({
  sourceActor,
  targetActor,
  stat,
  power,
  natures,
  critical,
  random,
  targets,
  other,
  offset,
}: {
  sourceActor: ResolvedActor
  targetActor: ResolvedActor
  stat: keyof ActorAttackStats
  power: number
  natures: Array<Nature>
  critical?: number
  random?: number
  targets?: number
  other?: number
  offset?: number
}) {
  const naturesMod = natures.reduce((mod, nature) => {
    const sourceStat = sourceActor[`${nature}Damage`]
    const targetStat = targetActor[`${nature}Resistance`]
    return mod * (sourceStat / targetStat)
  }, 1)

  return getDamageEq({
    attack: sourceActor[stat],
    defense: targetActor[stat],
    level: sourceActor.level,
    power,
    critical,
    natures: naturesMod,
    random,
    targets,
    other,
    offset,
  })
}

export { getDamage }
