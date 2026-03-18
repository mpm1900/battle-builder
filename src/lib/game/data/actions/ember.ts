import { nanoid } from 'nanoid'
import { makeAction } from '../../lib/make-action'
import { basicAttack } from './builders/basic-attack'
import { NATURES } from '../../types/natures'

const ember = makeAction(
  {
    ID: nanoid(),
    name: 'Ember',
    accuracy: 99,
    critical: 5,
    power: 55,
    stat: 'ninjutsu',
    targetCount: 1,
    natures: NATURES.fire,
  },
  basicAttack,
)

export { ember }
