import { styled } from "@mui/system";
import TableCell from "@mui/material/TableCell";
import Chip from "@mui/joy/Chip";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export const StyledTabCell = styled(TableCell)`
  max-width: ${(props) => props?.maxwidth}px;
  min-width: ${(props) => props?.minwidth}px;
  font-size: ${(props) => props?.fontSize}px;
  font-weight: ${(props) => (props?.isBlod ? "bold" : "normal")};
`;

export const StyledChip = styled(Chip)`
  color: white;
  background-color: #00b2e2;
  font-size: 12px;
  margin-left: 5px;
  cursor: default;
`;

export const StyledMessageContiner = styled("div")`
  display: flex;
  align-items: center;
`;

export const StyledMessage = styled("div")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledTableCellHeader = styled(TableCell)`
  width: fit-content;
`;

export const StyledHeaderContainer = styled("div")`
  display: inline-flex;
  align-items: center;
`;

export const StyledItemContainer = styled("div")`
  display: flex;
`;

export const StyledFilterIcon = styled(FilterAltIcon)`
  color: #898989;
  cursor: pointer;
`;

export const StyledSwapHorizIcon = styled(SwapHorizIcon)`
  transform: rotate(90deg);
  color: #898989;
  cursor: pointer;
`;
