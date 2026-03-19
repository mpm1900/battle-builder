import { Nature } from '#/components/game/nature'
import { Checkbox } from '#/components/ui/checkbox'
import { Input } from '#/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '#/components/ui/table'
import { Tabs, TabsList, TabsTrigger } from '#/components/ui/tabs'
import { NINJAS } from '#/data/ninjas'
import { useGame } from '#/hooks/use-game'
import { setActivePlayer, setupStore } from '#/lib/setup-store'
import { createFileRoute } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const game = useGame((g) => g)
  const activePlayerID = useStore(setupStore, (s) => s.activePlayerID)
  return (
    <main className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={2}>
              <Tabs value={activePlayerID} onValueChange={setActivePlayer}>
                <TabsList>
                  {game.players.map((p, i) => (
                    <TabsTrigger key={p.ID} value={p.ID}>
                      Player {i + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Nature</TableHead>
            <TableHead>Health</TableHead>
            <TableHead>Stamina</TableHead>
            <TableHead>Speed</TableHead>
            <TableHead>Ninjutsu</TableHead>
            <TableHead>Taijutsu</TableHead>
            <TableHead>Genjutsu</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {NINJAS.map((a) => (
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="w-28">
                <Input value={a.level} />
              </TableCell>
              <TableCell>{a.name}</TableCell>
              <TableCell className="flex gap-2">
                {a.natures.map((n) => (
                  <Nature key={n} nature={n} />
                ))}
              </TableCell>
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
