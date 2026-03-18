import type { Action, ActionBuilder, ActionConfig } from '../types/action'

function makeAction<T extends ActionConfig>(
  config: T,
  fn: ActionBuilder<T>,
): Action {
  return {
    ...fn(config),
    ID: config.ID,
    name: config.name,
    config,
  }
}

export { makeAction }
