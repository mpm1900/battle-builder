import { makeRoll } from '#/lib/game/lib/make-roll'
import { makeTransaction } from '#/lib/game/lib/make-transaction'
import type { ActionConfig, PartialAction } from '#/lib/game/types/action'
import type { GameTransaction } from '#/lib/game/types/game'
import { damage } from '#/lib/game/data/mutations/damage'
import { getContextTargets } from '#/lib/game/lib/get-context-targets'
import { getActor } from '#/lib/game/lib/get-actors'
import { withTargets } from '#/lib/game/lib/make-context'

function teamAttack<T extends ActionConfig>({
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
      predicate: (actor, context) => actor.playerID !== context.sourcePlayerID,
      validate: (context) => context.targetActorIDs.length === targetCount,
    },
    delta: (game, context) => {
      const transactions: Array<GameTransaction> = []

      const targets = getContextTargets(game, context)
      targets.forEach((targetID) => {
        for (let i = 0; i < hitCount; i++) {
          const playerID = getActor(game, (a) => a.ID === targetID)!.playerID
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
                withTargets(
                  context,
                  game.actors
                    .filter((a) => a.playerID === playerID)
                    .map((a) => a.ID),
                ),
              ),
            )
          } else {
            console.log('FAIL')
          }
        }
      })

      return transactions
    },
  }
}

export { teamAttack }
