import { getNinjasQuery } from '#/data/ninjas'
import type { ResolvedActorDTO } from '#/lib/game/types/actor'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Nature } from '../game/nature'
import { GiNinjaStar } from 'react-icons/gi'
import { Button } from '../ui/button'
import { Edit } from 'lucide-react'
import { useGame } from '#/hooks/use-game'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getBaseStatsTotal } from '#/lib/game/lib/get-base-stats-total'

const columnHelper = createColumnHelper<ResolvedActorDTO>()

const columns = [
  columnHelper.accessor('ID', {
    cell: (props) => <code>{props.getValue()}</code>,
  }),
  columnHelper.accessor('name', {
    header: 'Name',
  }),
  columnHelper.accessor('natures', {
    header: 'Natures',
    cell: (props) => (
      <span className="space-x-2">
        {props.getValue().map((n) => (
          <Nature key={n} nature={n} />
        ))}
      </span>
    ),
  }),
  columnHelper.accessor('action_count', {
    header: 'Actions',
    cell: (props) => (
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: props.getValue() }).map((_, i) => (
          <GiNinjaStar key={i} />
        ))}
      </div>
    ),
  }),
  columnHelper.accessor('hp', {
    cell: (props) => (
      <span>
        {props.row.original.hp}{' '}
        <span className="text-muted-foreground opacity-80">
          ({props.row.original.base_hp})
        </span>
      </span>
    ),
  }),
  columnHelper.accessor('stamina', {
    cell: (props) => (
      <span>
        {props.row.original.stamina}{' '}
        <span className="text-muted-foreground opacity-80">
          ({props.row.original.base_stamina})
        </span>
      </span>
    ),
  }),
  columnHelper.accessor('speed', {
    cell: (props) => (
      <span>
        {props.row.original.speed}{' '}
        <span className="text-muted-foreground opacity-80">
          ({props.row.original.base_speed})
        </span>
      </span>
    ),
  }),
  columnHelper.accessor('ninjutsu', {
    cell: (props) => (
      <span>
        {props.row.original.ninjutsu}{' '}
        <span className="text-muted-foreground opacity-80">
          ({props.row.original.base_ninjutsu})
        </span>
      </span>
    ),
  }),
  columnHelper.accessor('taijutsu', {
    cell: (props) => (
      <span>
        {props.row.original.taijutsu}{' '}
        <span className="text-muted-foreground opacity-80">
          ({props.row.original.base_taijutsu})
        </span>
      </span>
    ),
  }),
  columnHelper.accessor('genjutsu', {
    cell: (props) => (
      <span>
        {props.row.original.genjutsu}{' '}
        <span className="text-muted-foreground opacity-80">
          ({props.row.original.base_genjutsu})
        </span>
      </span>
    ),
  }),
  columnHelper.display({
    id: 'total',
    header: 'Total',
    cell: (props) => getBaseStatsTotal(props.row.original),
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => (
      <Button variant="ghost" size="icon">
        <Edit />
      </Button>
    ),
  }),
]

function NinjaTable() {
  const query = useSuspenseQuery(getNinjasQuery)
  const table = useReactTable({
    columns,
    data: query.data,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHead>
            ))}
          </tr>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { NinjaTable }
