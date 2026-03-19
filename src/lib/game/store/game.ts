import { Store } from '@tanstack/store'
import type { Game } from '../types/game'
import { nanoid } from 'nanoid'

const game = new Store<Game>({
  turn: null,
  players: [{ ID: nanoid() }, { ID: nanoid() }],
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
