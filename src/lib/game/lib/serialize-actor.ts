import type {
  Actor,
  ActorDTO,
  ResolvedActor,
  ResolvedActorDTO,
} from '../types/actor'

function serializeActor({
  actions,
  innate_modifiers,
  ...actor
}: Actor): ActorDTO {
  return {
    ...actor,
    actions: actions.map((a) => ({
      ID: a.ID,
      config: a.config,
      name: a.name,
    })),
  }
}

function serializeResolvedActor({
  actions,
  innate_modifiers,
  ...actor
}: ResolvedActor): ResolvedActorDTO {
  return {
    ...actor,
    actions: actions.map((a) => ({
      ID: a.ID,
      config: a.config,
      name: a.name,
    })),
  }
}

export { serializeActor, serializeResolvedActor }
