import { Store } from '@tanstack/store'
import type { Game } from '../types/game'

const game = new Store<Game>({
  turn: null,
  players: [{ ID: 'player_ONE' }, { ID: 'player_TWO' }],
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
