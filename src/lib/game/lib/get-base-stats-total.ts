import type { ResolvedActor, ResolvedActorDTO } from '../types/actor'

function getBaseStatsTotal(a: ResolvedActor | ResolvedActorDTO) {
  return (
    a.base_hp +
    a.base_stamina +
    a.base_speed +
    a.base_ninjutsu +
    a.base_taijutsu +
    a.base_genjutsu
  )
}

export { getBaseStatsTotal }
