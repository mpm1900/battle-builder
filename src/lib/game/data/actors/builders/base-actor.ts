import type { Actor } from '#/lib/game/types/actor'

function baseActor(
  config: {
    ID: string
    player_ID: string
    name: string
  },
  overrides: Partial<Actor>,
) {
  return {
    ID: config.ID,
    player_ID: config.player_ID,
    name: config.name,
    resolved: false as const,

    level: 0,
    experience: 0,
    action_count: 0,

    // Main stats (Pokémon-style controlled spread)
    ninjutsu: 0,
    taijutsu: 0,
    genjutsu: 0,
    speed: 0,

    hp: 0,
    stamina: 0,

    hp_offset: 0,
    stamina_offset: 0,

    max_hp: 1,
    max_stamina: 1,

    genjutsu_stage: 0,
    ninjutsu_stage: 0,
    taijutsu_stage: 0,
    speed_stage: 0,
    evasion_stage: 0,
    accuracy_stage: 0,

    evasion: 0,
    accuracy: 1,
    critical: 1.5,

    // Element identity: fire + yin specialist, less sustained vitality than bruisers
    fire_damage: 1,
    fire_resistance: 1,
    wind_damage: 1,
    wind_resistance: 1,
    lightning_damage: 1,
    lightning_resistance: 1,
    earth_damage: 1,
    earth_resistance: 1,
    water_damage: 1,
    water_resistance: 1,
    yin_damage: 1,
    yin_resistance: 1,
    yang_damage: 1,
    yang_resistance: 1,

    active: true,
    alive: true,

    natures: [],
    innate_modifiers: [],
    actions: [],
    ...overrides,
  }
}

export { baseActor }
