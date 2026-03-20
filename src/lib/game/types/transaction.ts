type TransactionDTO<C> = {
  ID: string
  context: C
  priority?: number
}

type Transaction<C, M> = TransactionDTO<C> & {
  mutation: M
}

export type { Transaction, TransactionDTO }
