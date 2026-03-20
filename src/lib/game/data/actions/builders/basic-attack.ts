import { makeRoll } from '#/lib/game/lib/make-roll'
import { makeTransaction } from '#/lib/game/lib/make-transaction'
import type { ActionConfig, PartialAction } from '#/lib/game/types/action'
import type { GameTransaction } from '#/lib/game/types/game'
import { damage } from '#/lib/game/data/mutations/damage'

function basicAttack<T extends ActionConfig>({
  accuracy = 99,
  critical = 5,
  power = 0,
  natures = [],
  stat = 'taijutsu',
  targetCount = 1,
  hitCount = 1,
}: T): PartialAction {
  return {
    targets: {
      predicate: (actor, context) => actor.player_ID !== context.sourcePlayerID,
      validate: (context) => context.targetActorIDs.length === targetCount,
    },
    delta: (_game, context) => {
      const transactions: Array<GameTransaction> = []

      for (let i = 0; i < hitCount; i++) {
        const accuracyRoll = makeRoll(accuracy)
        const criticalRoll = makeRoll(critical)

        if (accuracyRoll.success) {
          transactions.push(
            makeTransaction(
              damage({
                stat,
                power,
                critical: criticalRoll.success,
                natures,
              }),
              context,
            ),
          )
        } else {
          console.log('FAIL')
        }
      }

      return transactions
    },
  }
}

export { basicAttack }
