import type { Actor, ActorAttackStats } from './actor'
import type { Context } from './context'
import type { Game, GameTransaction } from './game'
import type { Mutation } from './mutation'
import type { Nature } from './natures'
import type { Transaction } from './transaction'

type ActionConfig = {
  ID: string
  name: string
  accuracy?: number
  critical?: number
  natures?: Array<Nature>
  power?: number
  stat?: keyof ActorAttackStats
  targetCount?: number
  hitCount?: number
}

type ActionMutation = Mutation<Game, Array<GameTransaction>, Context>

type Action = ActionMutation & {
  ID: string
  name: string
  config: ActionConfig
  targets: {
    predicate: (a: Actor, context: Context) => boolean
    validate: (context: Context) => boolean
  }
}

type ActionDTO = Pick<Action, 'ID' | 'name' | 'config'>

type PartialAction = Omit<Action, 'ID' | 'name' | 'config'>
type ActionBuilder<T> = (config: T) => PartialAction

type ActionTransaction = Transaction<Context, Action>

export type {
  Action,
  ActionDTO,
  ActionMutation,
  ActionConfig,
  ActionTransaction,
  ActionBuilder,
  PartialAction,
}
