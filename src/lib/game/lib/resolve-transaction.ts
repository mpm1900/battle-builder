import type { Mutation } from '../types/mutation'
import type { Transaction } from '../types/transaction'

function checkMutation<I, O, C>(
  input: I,
  mutation: Mutation<I, O, C> | undefined,
  context: C,
): boolean {
  if (!mutation) return false
  if (!mutation.filter) return true
  return mutation.filter(input, context)
}

function checkTransaction<I, O, C>(
  input: I,
  transaction: Transaction<C, Mutation<I, O, C>>,
): boolean {
  return checkMutation(input, transaction.mutation, transaction.context)
}

function resolveTransaction<I, O, C>(
  input: I,
  transaction: Transaction<C, Mutation<I, O, C>> | undefined,
  options: {
    fallback: O
    onFailure?: (fallback: O) => void
    onSuccess?: (output: O) => void
  },
): O {
  if (!transaction || !checkTransaction(input, transaction)) {
    options.onFailure?.(options.fallback)
    return options.fallback
  }

  const output = transaction.mutation.delta(input, transaction.context)
  options.onSuccess?.(output)
  return output
}

export { resolveTransaction, checkTransaction }
