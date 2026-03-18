import { resolveTransaction } from '../lib/resolve-transaction'
import { validateAction } from '../lib/validate-action'
import { popAction } from './actions'
import { getState, setState } from './game'
import { popTransaction, pushTransactions } from './transactions'
import { popTrigger } from './triggers'

function next() {
  const state = getState()
  if (state.transactions.length > 0) {
    console.log('Processing transaction...')
    const transaction = popTransaction()
    setState((prev) =>
      resolveTransaction(prev, transaction, { fallback: prev }),
    )

    return true
  }

  if (state.triggers.length > 0) {
    console.log('Processing trigger...')
    const trigger = popTrigger()
    if (validateAction(state, trigger)) {
      pushTransactions(resolveTransaction(state, trigger, { fallback: [] }))
    }

    return true
  }

  if (state.prompts.length > 0) {
    console.log('Processing prompt...')
    return false
  }

  if (state.actions.length > 0) {
    console.log('Processing action...')
    const action = popAction()
    if (validateAction(state, action)) {
      pushTransactions(resolveTransaction(state, action, { fallback: [] }))
    }

    return true
  }

  return false
}

export { next }
