import { NinjaTable } from '#/components/setup/ninja-table'
import { Button } from '#/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '#/components/ui/tabs'
import { getNinjasQuery } from '#/data/ninjas'
import { useGame } from '#/hooks/use-game'
import { setActivePlayer, setupStore } from '#/lib/setup-store'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'

export const Route = createFileRoute('/')({
  component: App,
  loader: async ({ context }) => {
    await context.queryClient.fetchQuery(getNinjasQuery)
  },
})

function App() {
  const game = useGame((g) => g)

  const activePlayerID = useStore(setupStore, (s) => s.activePlayerID)
  return (
    <>
      <header className="flex justify-between">
        <div>Ninja Builder</div>
        <div className="flex gap-4">
          <Tabs value={activePlayerID} onValueChange={setActivePlayer}>
            <TabsList>
              {game.players.map((p, i) => (
                <TabsTrigger key={p.ID} value={p.ID}>
                  Player {i + 1}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <Button className="">test</Button>
        </div>
      </header>
      <main className="p-6">
        <NinjaTable />
      </main>
    </>
  )
}
