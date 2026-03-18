type Delta<I, O, C> = (input: I, context: C) => O

type Mutation<I, O = I, C = undefined> = {
  delta: Delta<I, O, C>
  filter?: (input: I, context: C) => boolean
  priority?: number
}

export type { Delta, Mutation }
