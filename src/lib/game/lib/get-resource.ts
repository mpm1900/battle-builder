import type { ActorResources, ResolvedActor } from '../types/actor'

function toMaxResourceKey(key: keyof ActorResources) {
  return `max${key.charAt(0).toUpperCase()}${key.slice(1)}` as `max${Capitalize<keyof ActorResources>}`
}

function getResource(
  actor: ResolvedActor,
  resource: keyof ActorResources,
  options: { offset?: number; min?: number } = {},
) {
  const { offset = 0, min = 0 } = options
  const stat = actor[resource]
  const max = actor[toMaxResourceKey(resource)]
  const value = stat * max
  const remaining = Math.max(value - offset, min)
  return { remaining, max: value, ratio: remaining / value }
}

function getHealth(actor: ResolvedActor, damage?: number) {
  const resource = getResource(actor, 'hp', {
    offset: damage ?? actor.hpOffset,
  })
  return { ...resource, alive: resource.remaining > 0 }
}

export { toMaxResourceKey, getResource, getHealth }
