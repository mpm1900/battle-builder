import type { ActionTransaction } from './action'
import type { Actor, ResolvedActorDTO } from './actor'
import type { Context } from './context'
import type { ModifierTransaction } from './modifier'
import type { Mutation } from './mutation'
import type { Player } from './player'
import type { Transaction, TransactionDTO } from './transaction'
import type { Turn } from './turn'

type GameMutation = Mutation<Game, Game, Context>
type GameTransaction = Transaction<Context, GameMutation>

type PromptTransaction = ActionTransaction & {
  status: 'pending' | 'context-ready'
}

type Game = {
  turn: Turn | null
  players: Array<Player>
  actors: Array<Actor>
  modifiers: Array<ModifierTransaction>

  transactions: Array<GameTransaction>
  actions: Array<ActionTransaction>
  triggers: Array<ActionTransaction>
  prompts: Array<PromptTransaction>
}

type GameDTO = {
  turn: Turn | null
  players: Array<Player>
  actors: Array<ResolvedActorDTO>
  modifiers: Array<TransactionDTO<Context>>

  transactions: Array<TransactionDTO<Context>>
  actions: Array<TransactionDTO<Context>>
  triggers: Array<TransactionDTO<Context>>
  prompts: Array<TransactionDTO<Context>>
}

export type { Game, GameDTO, GameMutation, GameTransaction }
