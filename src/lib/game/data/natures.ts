import type { Nature } from '../types/natures'

const natureNames: Partial<Record<Nature, string>> = {
  fire: '火',
  wind: '風',
  lightning: '雷',
  earth: '土',
  water: '水',
  yin: '陰',
  yang: '陽',
}

export { natureNames }
