type Transaction<C, M> = {
  ID: string
  context: C
  mutation: M
  priority?: number
}

export type { Transaction }
