import { Store } from '@tanstack/store'
import type { Game } from '../types/game'

const game = new Store<Game>({
  turn: null,
  actors: [],
  modifiers: [],

  actions: [],
  triggers: [],
  transactions: [],
  prompts: [],
})

function getState() {
  return game.get()
}

function setState(updater: (prev: Game) => Partial<Game>) {
  game.setState((prev) => ({
    ...prev,
    ...updater(prev),
  }))
}

export { game, getState, setState }
