import type { ActionTransaction } from '../types/action'
import { getState, setState } from './game'

function popTrigger() {
  const [trigger, ...rest] = getState().triggers
  setState(() => ({
    triggers: rest,
  }))
  return trigger
}

function pushTriggers(triggers: Array<ActionTransaction>) {
  console.log(`Pushing ${triggers.length} triggers(s)`)
  setState((prev) => ({
    actions: prev.actions.concat(triggers),
  }))
}

export { popTrigger, pushTriggers }
