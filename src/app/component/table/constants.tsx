import { HeadCell, Alignment, RowOptions } from "./type";

export const headCells: readonly HeadCell[] = [
  {
    id: "osn",
    label: "OSN",
    align: Alignment.CENTER,
  },
  {
    id: "ms",
    label: "MS",
    align: Alignment.LEFT,
  },
  {
    id: "message",
    label: "Mensaje",
    align: Alignment.LEFT,
  },
  {
    id: "institution",
    label: "Institucion",
    align: Alignment.LEFT,
  },
  {
    id: "date",
    label: "Fecha",
    align: Alignment.LEFT,
  },
  {
    id: "time",
    label: "Tiempo",
    align: Alignment.LEFT,
  },
];

export const rowOptions: RowOptions = {
  checkbox: {
    // maxwidth: number,
    // minwidth: number,
    // isBlod: bool,
    // fontSize: number,
    aling: Alignment.LEFT,
    fontSize: 14,
  },
  osn: {
    aling: Alignment.CENTER,
    fontSize: 14,
  },
  ms: {
    aling: Alignment.LEFT,
    fontSize: 14,
  },
  message: {
    maxwidth: 400,
    aling: Alignment.CENTER,
    fontSize: 14,
  },
  institution: {
    aling: Alignment.LEFT,
    fontSize: 14,
  },
  date: {
    aling: Alignment.LEFT,
    fontSize: 14,
  },
  time: {
    aling: Alignment.LEFT,
    fontSize: 14,
  },
};
