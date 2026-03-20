import type { ActorResources, ResolvedActor } from '../types/actor'

function getResource(
  actor: ResolvedActor,
  resource: keyof ActorResources,
  options: { offset?: number; min?: number } = {},
) {
  const { offset = 0, min = 0 } = options
  const stat = actor[resource]
  const max = actor[`max_${resource}`]
  const value = stat * max
  const remaining = Math.max(value - offset, min)
  return { remaining, max: value, ratio: remaining / value }
}

function getHealth(actor: ResolvedActor, damage?: number) {
  const resource = getResource(actor, 'hp', {
    offset: damage ?? actor.hp_offset,
  })
  return { ...resource, alive: resource.remaining > 0 }
}

export { getResource, getHealth }
