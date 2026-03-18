type Context = {
  sourcePlayerID: string

  parentActorID: string
  sourceActorID: string
  targetActorIDs: Array<string>
  targetPositionIDs: Array<string>

  /*
  meta: {
    targetActorID?: string
    targetPositionID?: string
  }
  */
}

export type { Context }
