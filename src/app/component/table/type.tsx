export interface Data {
  id: number;
  osn: number;
  ms: number;
  message: string;
  institution: string;
  date: string;
  time: string;
  status: Status;
}

export type Order = "asc" | "desc";

export interface HeadCell {
  id: keyof Data;
  label: string;
  align: Alignment;
}

export interface RowOptions {
  [key: string]: Options;
}

interface Options {
  maxwidth?: number;
  minwidth?: number;
  isBlod?: boolean;
  aling?: Alignment;
  fontSize?: number;
}

export enum Alignment {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

export enum Status {
  NONE = "",
  IN_PROGRESS = "in-progress",
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface TableProps {
  labelId: string;
  row: Data;
  isItemSelected: boolean;
  handleClick: (event: React.MouseEvent<unknown>, id: number) => void;
}
