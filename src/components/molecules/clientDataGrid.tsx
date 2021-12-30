import { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getTransactionDetails } from "../../api/get";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { updateTransaction } from "../../api/update";
import { create_Transaction } from "../../api/create";

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

const AddTransactionButton = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 26px;
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  bottom: 30px;
  left: 40px;
  width: 40px;
  height: 40px;
  z-index: 2;
  background-color: var(--white);
  color: var(--black);
`;

const ClientDataGrid = ({ source_id }: ClientDataGridProps) => {
  const [rows, setrows] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [transactions, settransactions]: any = useState(null);
  const [flag, setFlag] = useState(true);
  const [data, setdata]: any = useState(null);

  useEffect(() => {
    const genResults = async () => {
      const res = await getTransactionDetails(source_id);
      if (res.length == 0) {
        setFlag(false);
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
            editable: true,
          };
          columns_arr.push(col);
        });
        const rows_arr: any = [];
        res.map((obj: any, index: any) => {
          const new_obj = { id: index, ...obj };
          rows_arr.push(new_obj);
        });
        setcolumns(columns_arr);
        setrows(rows_arr);
        setFlag(false);
      }
    };

    if (source_id) {
      genResults();
    } else {
      setFlag(false);
    }
  }, [source_id, data]);

  const generateTransaction = async () => {
    const data = {
      name: "",
      date: "",
      inOut: "",
      type: "",
      subType: "",
      description: " Desc",
      notes: "",
      exludeFlg: "N",
      descOverride: "",
      multiplyer: "",
      amount: "",
      finalAmount: "",
    };
    const date = new Date();
    const mod_data = {
      ...data,
      date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
    };
    console.log("moddata", mod_data);
    const res = await create_Transaction(mod_data, source_id);
    setdata(mod_data);
    console.log("response", res);
  };

  const handleChangeRow = async (obj: any, event: any) => {
    const row = obj.row;
    const value = obj.value;
    const field = obj.field;
    console.log("row", row);
    const new_obj = {
      ...row,
      [field]: event.target.value,
    };
    delete new_obj.CREATED;
    console.log(new_obj, "new_obj");
    const res = await updateTransaction(new_obj);
    console.log("response", res);
  };

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
        <Fragment>
          <AddTransactionButton onClick={generateTransaction}>
            +
          </AddTransactionButton>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            onCellEditStop={(v, e) => {
              handleChangeRow(v, e);
            }}
          />
        </Fragment>
      ) : (
        <NoTransactions>
          <div className="text">No transactions available</div>
        </NoTransactions>
      )}
    </div>
  );
};

export default ClientDataGrid;
