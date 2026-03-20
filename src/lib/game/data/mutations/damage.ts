import { getDamage } from '../../lib/get-damage'
import { getHealth } from '../../lib/get-resource'
import { makeRoll, rand } from '../../lib/make-roll'
import { makeTransactionFn } from '../../lib/make-transaction'
import { resolveContext } from '../../lib/resolve-context'
import { updateActor } from '../../lib/update-actor'
import type { ActionMutation } from '../../types/action'
import type { ActorAttackStats, ResolvedActor } from '../../types/actor'
import type { Context } from '../../types/context'
import type { Game, GameMutation, GameTransaction } from '../../types/game'
import type { Nature } from '../../types/natures'

const TARGETS_MODIFIER = 0.75

function applyDamage(game: Game, target: ResolvedActor, damage: number) {
  return updateActor(game, target.ID, (a) => {
    const total = a.hp_offset + damage
    const health = getHealth(target, total)
    return {
      alive: health.alive,
      hpOffset: Math.max(0, total),
    }
  })
}

function getDamageAmount(
  sourceActor: ResolvedActor,
  targetActor: ResolvedActor,
  config: Parameters<typeof damage>[0],
  context: Context,
) {
  return getDamage({
    sourceActor,
    targetActor,
    stat: config.stat,
    power: config.power,
    natures: config.natures,
    critical: config.critical ? sourceActor.critical : 1,
    targets: context.targetActorIDs.length > 1 ? TARGETS_MODIFIER : 1,
    other: config.other,
    offset: config.offset,
    random: rand(0.8, 1),
  })
}

function damage(config: {
  stat: keyof ActorAttackStats
  power: number
  critical: boolean
  natures: Array<Nature>
  other?: number
  offset?: number
  recoil?: number
}): GameMutation {
  return {
    delta: (state, context) => {
      const { sourceActor, targetActors } = resolveContext(state, context)
      if (!sourceActor) return state

      targetActors.forEach((targetActor) => {
        const evasionRoll = makeRoll(targetActor.evasion)
        if (evasionRoll.success) {
          return
        }

        const damageAmount = getDamageAmount(
          sourceActor,
          targetActor,
          config,
          context,
        )

        state = applyDamage(state, targetActor, damageAmount)

        if (config.recoil) {
          state = applyDamage(state, sourceActor, damageAmount * config.recoil!)
        }
      })

      return state
    },
  }
}

function damageSplit(config: {
  stat: keyof ActorAttackStats
  power: number
  critical: boolean
  natures: Array<Nature>
  other?: number
  offset?: number
  recoil?: number
}): ActionMutation {
  return {
    delta: (state, context) => {
      const transactions: Array<GameTransaction> = []
      const { sourceActor, targetActors } = resolveContext(state, context)
      if (!sourceActor) return transactions

      targetActors.forEach((targetActor) => {
        const evasionRoll = makeRoll(targetActor.evasion)
        if (evasionRoll.success) {
          return
        }

        const damageAmount = getDamageAmount(
          sourceActor,
          targetActor,
          config,
          context,
        )

        transactions.push(
          makeTransactionFn<Game, Game, Context, GameMutation>(
            (game) => applyDamage(game, targetActor, damageAmount),
            context,
          ),
        )

        if (config.recoil) {
          console.log(config.recoil, damageAmount * config.recoil)
          transactions.push(
            makeTransactionFn<Game, Game, Context, GameMutation>(
              (game) =>
                applyDamage(game, sourceActor, damageAmount * config.recoil!),
              context,
            ),
          )
        }
      })

      return transactions
    },
  }
}

export { damage, damageSplit }
