import { FC } from "react";
import { Box } from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

interface Props extends DataGridProps {
  height: number;
}

export const DataGridComponent: FC<Props> = ({
  height = 400,
  rows,
  columns,
  pageSize = 4,
  ...options
}) => {
  return (
    <Box height={height}>
      <DataGrid columns={columns} pageSize={pageSize} rows={rows} {...options} />
    </Box>
  );
};
