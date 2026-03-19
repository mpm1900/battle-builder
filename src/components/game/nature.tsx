import { natureNames } from '#/lib/game/data/natures'
import type { NatureSet, Nature as NatureType } from '#/lib/game/types/natures'
import { cva } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/types'

type t = Record<string, Record<NatureSet, ClassValue>>

const variants = cva<t>('text-white px-1 py-0.5 rounded text-shadow-md', {
  variants: {
    variant: {
      fire: 'bg-red-500',
      wind: 'bg-emerald-700',
      lightning: 'bg-yellow-400 text-black!',
      earth: 'bg-taupe-600',
      water: 'bg-blue-500',
      yang: 'bg-neutral-300 text-black!',
      yin: 'bg-violet-500',
    },
  },
  defaultVariants: {
    variant: 'fire',
  },
})

function Nature({
  nature,
  className,
  ...props
}: React.ComponentProps<'div'> & { nature: NatureSet }) {
  return (
    <div
      data-role="nature"
      className={variants({ variant: nature }) + ''}
      {...props}
    >
      {natureNames[nature] ?? nature}
    </div>
  )
}

export { Nature }
