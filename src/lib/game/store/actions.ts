import { sortPriority } from '../lib/sort-priority'
import type { ActionTransaction } from '../types/action'
import { game, setState } from './game'

function popAction() {
  const [action, ...rest] = game.get().actions
  setState(() => ({
    actions: rest,
  }))
  return action
}

function pushActions(actions: Array<ActionTransaction>) {
  console.log(`Pushing ${actions.length} action(s)`)
  setState((prev) => ({
    actions: sortPriority(prev.actions.concat(actions)),
  }))
}

function filterActions(predicate: (action: ActionTransaction) => boolean) {
  setState((prev) => ({
    actions: prev.actions.filter(predicate),
  }))
}

function removeAction(actionID: string) {
  filterActions((action) => action.ID !== actionID)
}

export { popAction, pushActions, filterActions, removeAction }
