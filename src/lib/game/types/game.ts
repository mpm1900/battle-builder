import type { ActionTransaction } from './action'
import type { Actor } from './actor'
import type { Context } from './context'
import type { ModifierTransaction } from './modifier'
import type { Mutation } from './mutation'
import type { Transaction } from './transaction'

type GameMutation = Mutation<Game, Game, Context>
type GameTransaction = Transaction<Context, GameMutation>

type PromptTransaction = ActionTransaction & {
  status: 'pending' | 'context-ready'
}

type Game = {
  turn: Turn | null
  actors: Array<Actor>
  modifiers: Array<ModifierTransaction>

  transactions: Array<GameTransaction>
  actions: Array<ActionTransaction>
  triggers: Array<ActionTransaction>
  prompts: Array<PromptTransaction>
}

export type { Game, GameMutation, GameTransaction }
