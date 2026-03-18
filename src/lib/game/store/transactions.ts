import type { GameTransaction } from '../types/game'
import { getState, setState } from './game'

function popTransaction() {
  const [action, ...rest] = getState().transactions
  setState(() => ({
    transactions: rest,
  }))
  return action
}

function pushTransactions(actions: Array<GameTransaction>) {
  setState((prev) => ({
    transactions: prev.transactions.concat(actions),
  }))
}

export { popTransaction, pushTransactions }
