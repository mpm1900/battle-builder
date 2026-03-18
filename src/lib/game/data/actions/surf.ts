import { nanoid } from 'nanoid'
import { makeAction } from '../../lib/make-action'
import { NATURES } from '../../types/natures'
import { allAttack } from './builders/all-attack'

const surf = makeAction(
  {
    ID: nanoid(),
    name: 'Surf',
    accuracy: 99,
    critical: 5,
    power: 80,
    stat: 'ninjutsu',
    targetCount: 1,
    natures: NATURES.water,
  },
  allAttack,
)

export { surf }
