type Nature = 'fire' | 'wind' | 'lightning' | 'earth' | 'water' | 'yin' | 'yang'

const Natures = {
  fire: ['fire'],
  wind: ['wind'],
  lightning: ['lightning'],
  earth: ['earth'],
  water: ['water'],
  yin: ['yin'],
  yang: ['yang'],
  scorch: ['fire', 'wind'],
  // ??? [fire, lightning]
  lava: ['fire', 'earth'],
  boil: ['fire', 'water'],
  // ??? [wind, lightning]
  magnet: ['wind', 'earth'],
  ice: ['wind', 'water'],
  explosion: ['lightning', 'earth'],
  storm: ['lightning', 'water'],
  wood: ['earth', 'water'],
  yinyang: ['yin', 'yang'],
  dust: ['fire', 'earth', 'wind'],
} as const

type NatureSet = keyof typeof Natures

const NATURES = Natures as any as Record<NatureSet, Array<Nature>>

export type { Nature, NatureSet }
export { NATURES }
