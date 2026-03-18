import type { Action } from './action'
import type { ActorMutation } from './actor'
import type { Context } from './context'
import type { Transaction } from './transaction'

type Trigger = Action & {
  on: string
}

type Modifier = {
  ID: string
  name: string
  duration?: number
  mutations: Array<ActorMutation & { modifierID: string | null }>
  triggers: Array<Trigger>
}

type ModifierTransaction = Transaction<Context, Modifier>

export type { Modifier, ModifierTransaction, Trigger }
