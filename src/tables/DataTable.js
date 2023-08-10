import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/material/styles';
import "./DataTable.css"

export default function DataTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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

  //   Dark Theme

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1e88e5", // Customize the primary color
      },
      secondary: {
        main: "#ec407a", // Customize the secondary color
      },
      background: {
        default: "#121212", // Customize the background color
        paper: "#1e1e1e", // Customize the paper background color
      },
      text: {
        primary: "#ffffff", // Customize the primary text color
        secondary: "#b0bec5", // Customize the secondary text color
      },
    },
  });

  return (
    <div className="table__container">
    <ThemeProvider theme={darkTheme}>
      <div style={{ height: 400, width: "100%", alignItems: "center"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "primary.dark",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </div>
    </ThemeProvider>
    </div>
  );
}
