import { decrementDuration } from '../lib/decrement-duration'
import { getModifiers } from '../lib/get-modifiers'
import { makeTransaction } from '../lib/make-transaction'
import { checkTransaction } from '../lib/resolve-transaction'
import type { Context } from '../types/context'
import type { ModifierTransaction, Trigger } from '../types/modifier'
import { setState } from './game'

function pushModifiers(modifiers: Array<ModifierTransaction>) {
  setState((prev) => ({
    modifiers: prev.modifiers.concat(modifiers),
  }))
}

function filterModifiers(
  predicate: (modifier: ModifierTransaction) => boolean,
) {
  setState((prev) => ({
    modifiers: prev.modifiers.filter(predicate),
  }))
}

function mapModifiers(
  fn: (modifier: ModifierTransaction) => Partial<ModifierTransaction>,
) {
  setState((prev) => ({
    modifiers: prev.modifiers.map((transaction) => ({
      ...transaction,
      ...fn(transaction),
    })),
  }))
}

function decrementModifierDurations() {
  mapModifiers((transaction) => ({
    mutation: decrementDuration(transaction.mutation),
  }))

  filterModifiers(
    (modifier) =>
      modifier.mutation.duration === undefined ||
      modifier.mutation.duration > 0,
  )
}

function emitTrigger(on: Trigger['on'], context: Context) {
  setState((prev) => {
    const modifiers = getModifiers(prev)
    const triggers = modifiers
      .flatMap((m) =>
        m.mutation.triggers.map((t) => makeTransaction(t, context)),
      )
      .filter((t) => t.mutation.on === on && checkTransaction(prev, t))

    return {
      ...prev,
      triggers: prev.triggers.concat(triggers),
    }
  })
}

export {
  pushModifiers,
  filterModifiers,
  mapModifiers,
  decrementModifierDurations,
  emitTrigger,
}
