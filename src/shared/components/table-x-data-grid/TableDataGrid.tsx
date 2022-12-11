import { FC, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface Props {
  children: (
    table: boolean,
    setTableDataGrid: React.Dispatch<React.SetStateAction<boolean>>,
  ) => React.ReactNode;
}

export const TableDataGrid: FC<Props> = ({ children }) => {
  const [tableDataGrid, setTableDataGrid] = useState(false);

  return (
    <Box>
      <DataGrid columns={[]} rows={[]} />
      {children(tableDataGrid, setTableDataGrid)}
    </Box>
  );
};
