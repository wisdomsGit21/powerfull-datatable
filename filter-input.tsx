import { Column } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ColumnMeta } from "./types"

interface FilterInputProps<TData, TValue> {
  column: Column<TData, TValue> & { columnDef: { meta?: ColumnMeta } }
}

export function FilterInput<TData, TValue>({
                                             column,
                                           }: FilterInputProps<TData, TValue>) {
  const columnFilterValue = column.getFilterValue() as string
  const options = column.columnDef.meta?.filterOptions

  if (options) {
    return (
      <Select
        value={columnFilterValue }
        onValueChange={(value) => column.setFilterValue(value === "all" ? "" : value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Filter ${column.id}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  return (
    <Input
      placeholder={`Filter ${column.id}...`}
      value={columnFilterValue ?? ""}
      onChange={(event) => column.setFilterValue(event.target.value)}
      className="w-[180px]"
    />
  )
}