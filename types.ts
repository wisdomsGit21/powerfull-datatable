import { ColumnDef } from "@tanstack/react-table"

export interface ColumnMeta {
  filterOptions?: string[]
}

export type ColumnDefWithMeta<TData, TValue = unknown> = ColumnDef<TData, TValue> & {
  meta?: ColumnMeta
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDefWithMeta<TData, TValue>[]
  data: TData[]
  pagination?: boolean,
  hideableColumn?: boolean
}