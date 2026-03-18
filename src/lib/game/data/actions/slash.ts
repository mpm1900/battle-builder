import { nanoid } from 'nanoid'
import { makeAction } from '../../lib/make-action'
import { basicAttack } from './builders/basic-attack'

const slash = makeAction(
  {
    ID: nanoid(),
    name: 'Slash',
    accuracy: 99,
    critical: 5,
    power: 70,
    stat: 'taijutsu',
    targetCount: 1,
    natures: [],
  },
  basicAttack,
)

export { slash }
