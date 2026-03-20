import { itachi } from '#/lib/game/data/actors/itachi'
import { kakuzu } from '#/lib/game/data/actors/kakuzu'
import { kisame } from '#/lib/game/data/actors/kisame'
import { sasuke } from '#/lib/game/data/actors/sasuke'
import { resolveActor } from '#/lib/game/lib/resolve-actor'
import {
  serializeActor,
  serializeResolvedActor,
} from '#/lib/game/lib/serialize-actor'
import { getState } from '#/lib/game/store/game'
import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

const NINJAS = [itachi(), kisame(), kakuzu(), sasuke()]

const getNinjas = createServerFn().handler(() =>
  NINJAS.map((a) => serializeActor(a)),
)

const getResolvedNinjas = createServerFn().handler(() => {
  const game = getState()
  return NINJAS.map((a) => resolveActor(game, a.ID, { cachedActor: a })!).map(
    (a) => serializeResolvedActor(a),
  )
})

const getNinjasQuery = queryOptions({
  queryKey: ['ninjas'],
  queryFn: () => getResolvedNinjas(),
})

export { NINJAS, getNinjas, getNinjasQuery }
