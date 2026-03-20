import type { Actor } from '../types/actor'
import type { Context } from '../types/context'

type MakeContextConfig = {
  sourcePlayerID: string
  sourceActorID: string
} & Partial<Context>

function makeContext({
  sourceActorID,
  parentActorID,
  targetActorIDs = [],
  targetPositionIDs = [],
  ...config
}: MakeContextConfig): Context {
  return {
    ...config,
    sourceActorID: sourceActorID,
    parentActorID: parentActorID ?? sourceActorID,
    targetActorIDs,
    targetPositionIDs,
  }
}

function makeContextFromActor(
  actor: Actor,
  rest: Partial<MakeContextConfig> = {},
) {
  return makeContext({
    ...rest,
    sourceActorID: actor.ID,
    sourcePlayerID: actor.player_ID,
  })
}

function sliceContext(context: Context, index: number): Context {
  return {
    ...context,
    targetActorIDs: [context.targetActorIDs[index]].filter(Boolean),
    targetPositionIDs: [context.targetPositionIDs[index]].filter(Boolean),
  }
}

function withTargets(context: Context, targetIDs: Array<string>): Context {
  return {
    ...context,
    targetActorIDs: targetIDs,
    targetPositionIDs: [],
  }
}

export { makeContext, makeContextFromActor, sliceContext, withTargets }
