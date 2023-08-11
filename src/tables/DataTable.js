import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import "./DataTable.css";

export default function DataTable(props) {
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
        <div style={{ height: 400, width: "100%", alignItems: "center" }}>
          <DataGrid
            rows={props.data}
            columns={props.columns}
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
