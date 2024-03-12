import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { EnhancedTableProps, Data } from "../type";
import { headCells } from "../constants";
import {
  StyledFilterIcon,
  StyledSwapHorizIcon,
  StyledHeaderContainer,
  StyledTableCellHeader,
  StyledItemContainer,
} from "../styled";

export function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <StyledTableCellHeader
            key={headCell.id}
            align={headCell.align}
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <StyledHeaderContainer>
              <span>{headCell.label}</span>
              <StyledItemContainer>
                <StyledFilterIcon fontSize="small" />
                <StyledSwapHorizIcon
                  onClick={createSortHandler(headCell.id)}
                  direction={orderBy === headCell.id ? order : "asc"}
                  fontSize="small"
                />
              </StyledItemContainer>
            </StyledHeaderContainer>
          </StyledTableCellHeader>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
}
