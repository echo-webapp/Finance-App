import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getTransactionDetails } from "../../api/client";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
interface ClientDataGridProps {
  source_id: any;
}

const NoTransactions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 93px;
  border: 2px solid white;
  background-color: var(--black);
  .text {
    font-weight: 500;
    font-size: 35.102px;
    text-align: center;
    color: #ffffff;
  }
`;

const ClientDataGrid = ({ source_id }: ClientDataGridProps) => {
  const [rows, setrows] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [transactions, settransactions]: any = useState(null);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const genResults = async () => {
      const res = await getTransactionDetails(source_id);
      console.log("transaction", res);
      if (res.length == 0) {
        settransactions(null);
      } else {
        settransactions(true);
        const obj = res[0];
        const columns_arr: any = [];
        Object.keys(obj).map((key) => {
          const col = {
            field: key,
            headerName: key,
            width: 150,
          };
          columns_arr.push(col);
        });
        console.log("col", columns_arr);
        const rows_arr: any = [];
        res.map((obj: any, index: any) => {
          const new_obj = { id: index, ...obj };
          rows_arr.push(new_obj);
        });
        console.log("row", rows_arr);
        setcolumns(columns_arr);
        setrows(rows_arr);
        setFlag(false);
      }
    };

    if (source_id) {
      console.log("source id", source_id);
      genResults();
    } else {
      setFlag(false);
    }
  }, [source_id]);

  return (
    <div
      style={{
        height: "100%",
        background: !transactions ? "var(--white)" : "var(--white)",
        borderRadius: 93,
      }}
    >
      {flag ? (
        <NoTransactions>
          <CircularProgress
            color="inherit"
            style={{ color: "white" }}
            size={70}
          />
        </NoTransactions>
      ) : transactions ? (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      ) : (
        <NoTransactions>
          <div className="text">No transactions available</div>
        </NoTransactions>
      )}
    </div>
  );
};

export default ClientDataGrid;
