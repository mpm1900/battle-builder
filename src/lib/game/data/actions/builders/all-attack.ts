import { makeRoll } from '#/lib/game/lib/make-roll'
import { makeTransaction } from '#/lib/game/lib/make-transaction'
import type { ActionConfig, PartialAction } from '#/lib/game/types/action'
import type { GameTransaction } from '#/lib/game/types/game'
import { damage } from '#/lib/game/data/mutations/damage'
import { withTargets } from '#/lib/game/lib/make-context'

function allAttack<T extends ActionConfig>({
  accuracy = 99,
  critical = 5,
  power = 0,
  natures = [],
  stat = 'taijutsu',
  hitCount = 1,
}: T): PartialAction {
  return {
    targets: {
      predicate: () => false,
      validate: (context) => context.targetActorIDs.length === 0,
    },
    delta: (game, context) => {
      const transactions: Array<GameTransaction> = []

      for (let i = 0; i < hitCount; i++) {
        const accuracyRoll = makeRoll(accuracy)
        const criticalRoll = makeRoll(critical)
        const otherActors = game.actors.filter(
          (a) => a.ID !== context.sourceActorID && a.active,
        )
        console.log('OTHER', otherActors)

        if (accuracyRoll.success) {
          transactions.push(
            makeTransaction(
              damage({
                stat,
                power,
                critical: criticalRoll.success,
                natures,
              }),
              withTargets(
                context,
                otherActors.map((a) => a.ID),
              ),
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

export { allAttack }
