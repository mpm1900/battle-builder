import { nanoid } from 'nanoid'
import type { Delta, Mutation } from '../types/mutation'
import type { Transaction } from '../types/transaction'

function makeTransaction<C, M>(mutation: M, context: C): Transaction<C, M> {
  return {
    ID: nanoid(),
    context,
    mutation,
  }
}

function makeTransactionFn<I, O, C, M extends Mutation<I, O, C>>(
  delta: Delta<I, Partial<O>, C>,
  context: C,
  options: { mutation: Partial<M> } = { mutation: {} },
): Transaction<C, M> {
  return makeTransaction(
    {
      ...options.mutation,
      delta: (i, c) => ({
        ...i,
        ...delta(i, c),
      }),
    } as M,
    context,
  )
}

export { makeTransaction, makeTransactionFn }
