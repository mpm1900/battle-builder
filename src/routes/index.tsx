import { Button } from '#/components/ui/button'
import { useGame } from '#/hooks/use-game'
import { kisame } from '#/lib/game/data/actors/kisame'
import { pushActors } from '#/lib/game/store/actors'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const game = useGame((g) => g)
  console.log(game)
  return (
    <main className="">
      <Button onClick={() => pushActors([kisame])}>
        add kisame {game.actors.length}
      </Button>
    </main>
  )
}
