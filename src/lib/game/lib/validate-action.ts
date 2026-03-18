import type { ActionTransaction } from '../types/action'

function validateAction(transaction: ActionTransaction) {
  return transaction.mutation.targets.validate(transaction.context)
}

export { validateAction }
