import * as React from "react";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { rowOptions } from "../constants";
import {
  StyledTabCell,
  StyledChip,
  StyledMessageContiner,
  StyledMessage,
} from "../styled";
import { Status } from "../type";
import { TableProps } from "../type";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

export function TableContentBody(props: TableProps) {
  const { handleClick, row, isItemSelected, labelId } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      selected={isItemSelected}
    >
      <StyledTabCell
        padding="checkbox"
        align={rowOptions["checkbox"].aling}
        {...rowOptions["checkbox"]}
      >
        <Checkbox
          onClick={(event) => handleClick(event, row.id)}
          color="primary"
          checked={isItemSelected}
          inputProps={{
            "aria-labelledby": labelId,
          }}
        />
      </StyledTabCell>
      <StyledTabCell
        component="th"
        id={labelId}
        scope="row"
        padding="none"
        align={rowOptions["osn"].aling}
        {...rowOptions["osn"]}
      >
        {row.osn}
      </StyledTabCell>
      <StyledTabCell align={rowOptions["ms"].aling} {...rowOptions["ms"]}>
        {row.ms}
      </StyledTabCell>
      <StyledTabCell
        align={rowOptions["message"].aling}
        {...rowOptions["message"]}
      >
        <StyledMessageContiner>
          <StyledMessage>{row.message}</StyledMessage>
          {row.status === Status.IN_PROGRESS && (
            <StyledChip variant="solid">En Proceso</StyledChip>
          )}
        </StyledMessageContiner>
      </StyledTabCell>
      <StyledTabCell
        align={rowOptions["institution"].aling}
        {...rowOptions["institution"]}
      >
        {row.institution}
      </StyledTabCell>
      <StyledTabCell align={rowOptions["date"].aling} {...rowOptions["date"]}>
        {row.date}
      </StyledTabCell>
      <StyledTabCell align={rowOptions["time"].aling} {...rowOptions["time"]}>
        {row.time}
      </StyledTabCell>
      <StyledTabCell>
        {row.status === Status.IN_PROGRESS && (
          <IconButton
            key={`expand-icon-${row.id}`}
            aria-label="expand row"
            onClick={() => setIsOpen(!isOpen)}
            style={{ padding: 0 }}
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        )}
      </StyledTabCell>
    </TableRow>
  );
}

export default TableContentBody;
