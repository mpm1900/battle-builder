import { game } from '#/lib/game/store/game'
import type { Game } from '#/lib/game/types/game'
import { useStore } from '@tanstack/react-store'

const useGame = <T = unknown>(selector: (snapshot: Game) => T) =>
  useStore(game, selector)

export { useGame }
