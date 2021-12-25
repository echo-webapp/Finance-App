import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const ClientDataGrid = ({ rows, columns }: any) => {
  return (
    <div
      style={{
        height: 450,
        width: "50%",
        // border: "2px solid #E5E5E5",
        // borderRadius: "93px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ClientDataGrid;
