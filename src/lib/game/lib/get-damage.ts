import type { ActorAttackStats, ResolvedActor } from '../types/actor'
import { NATURES, type Nature } from '../types/natures'

function getSTAB(actor: ResolvedActor, natures: Array<Nature>) {
  console.log(actor.natures, natures)
  const actorNatures = actor.natures.flatMap((n) => NATURES[n])
  const matches = natures.filter((n) => actorNatures.includes(n))
  const stab = 1 + matches.length * 0.25
  return stab
}

function getDamageEq(config: {
  attack: number
  critical?: number
  defense: number
  level: number
  power: number
  natures?: number
  stab?: number
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
    stab = 1,
    targets = 1,
    random = 1,
    other = 1,
    offset = 0,
  } = config
  console.log('stab', stab)
  const level_mod = (2 * level) / 5 + 2
  const pow_ad = (attack / defense) * power
  const term_1 = (level_mod * pow_ad) / 50 + 2
  const raw =
    term_1 * critical * targets * natures * stab * random * other + offset

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
    const sourceStat = sourceActor[`${nature}_damage`]
    const targetStat = targetActor[`${nature}_resistance`]
    return mod * (sourceStat / targetStat)
  }, 1)

  return getDamageEq({
    attack: sourceActor[stat],
    defense: targetActor[stat],
    level: sourceActor.level,
    power,
    critical,
    natures: naturesMod,
    stab: getSTAB(sourceActor, natures),
    random,
    targets,
    other,
    offset,
  })
}

export { getDamage }
