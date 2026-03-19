import { nanoid } from 'nanoid'
import { makeAction } from '../../lib/make-action'
import { basicAttack } from './builders/basic-attack'
import { NATURES } from '../../types/natures'

const chidori = makeAction(
  {
    ID: nanoid(),
    name: 'Chidori',
    accuracy: 93,
    critical: 8,
    power: 85,
    stat: 'ninjutsu',
    targetCount: 1,
    natures: NATURES.lightning,
  },
  basicAttack,
)

export { chidori }
