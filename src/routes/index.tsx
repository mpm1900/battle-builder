import { Button } from '#/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '#/components/ui/table'
import { NINJAS } from '#/data/ninjas'
import { useGame } from '#/hooks/use-game'
import { kisame } from '#/lib/game/data/actors/kisame'
import { pushActors } from '#/lib/game/store/actors'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const game = useGame((g) => g)
  console.log(game)
  return (
    <main className="p-6">
      <Table>
        <TableHeader>
          <TableHead>Name</TableHead>
          <TableHead>Nature</TableHead>
          <TableHead>Health</TableHead>
          <TableHead>Stamina</TableHead>
          <TableHead>Speed</TableHead>
          <TableHead>Ninjutsu</TableHead>
          <TableHead>Taijutsu</TableHead>
          <TableHead>Genjutsu</TableHead>
          <TableHead>Total</TableHead>
        </TableHeader>
        <TableBody>
          {NINJAS.map((a) => (
            <TableRow>
              <TableCell>{a.name}</TableCell>
              <TableCell>{a.natures}</TableCell>
              <TableCell>{a.hp}</TableCell>
              <TableCell>{a.stamina}</TableCell>
              <TableCell>{a.speed}</TableCell>
              <TableCell>{a.ninjutsu}</TableCell>
              <TableCell>{a.taijutsu}</TableCell>
              <TableCell>{a.genjutsu}</TableCell>
              <TableCell>
                {a.hp +
                  a.stamina +
                  a.speed +
                  a.ninjutsu +
                  a.taijutsu +
                  a.genjutsu}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
