import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { DataGridComponent } from "@shared/components/DataGridComponent";
import { SideBarLayout } from "@shared/layouts/side-bar/SideBarLayout";
import styled from "@emotion/styled";
import { SideBar } from "@shared/layouts/side-bar/SideBar";
import { SideBarBody } from "@shared/layouts/side-bar/SideBarBody";

import { SideBarMenu } from "../components/SideBarMenu";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "firstName", headerName: "First name", flex: 1 },
  { field: "lastName", headerName: "Last name", flex: 1 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    flex: 1,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const links = [
  {
    href: "Home",
  },
];

export const IssuesPage: FC = () => {
  // const navigate = useNavigate();

  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  return (
    <SideBarLayout
      maxWidthSideBar={300}
      open={isOpenSideBar}
      onClose={() => setIsOpenSideBar(false)}
    >
      <SideBar>
        <Typography fontSize={32} variant="h1">
          Issues
        </Typography>
        <Typography fontSize={32} variant="h1">
          Issues
        </Typography>
        <Typography fontSize={32} variant="h1">
          Issues
        </Typography>
        <Typography fontSize={32} variant="h1">
          Issues
        </Typography>
        <Typography fontSize={32} variant="h1">
          Issues
        </Typography>
        <Typography fontSize={32} variant="h1">
          Issues
        </Typography>
        <Typography fontSize={32} variant="h1">
          Issues
        </Typography>
      </SideBar>
      <SideBarBody>
        <Button onClick={() => setIsOpenSideBar(!isOpenSideBar)}>Toggle</Button>
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
        <DataGridComponent columns={columns} height={400} pageSize={5} rows={rows} />
      </SideBarBody>
    </SideBarLayout>
  );
};

// const StyledButton = styled(Button)`
//   @media screen and (max-width: 768px) {
//     & {
//       display: none;
//     }
//   }
// `;
