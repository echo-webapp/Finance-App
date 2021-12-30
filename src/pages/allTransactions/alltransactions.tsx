import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getTransactionDetails } from "./../../api/get";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from "@mui/x-data-grid";
import styled from "styled-components";
import LoaderScreen from "../../components/molecules/LoaderScreen";
import Header from "../../components/molecules/header";
import { json2csvAsync } from "json-2-csv";

const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--black);
  width: 100%;
  min-height: 100vh;
`;

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
const DataGrid1 = styled.div`
  margin-top: 50px;
  height: 637px;
  width: 1301px;
  width: 70%;
  border-bottom-left-radius: 800px;
  border-top-left-radius: 800px;
`;

const Transaction = () => {
  const history: any = useHistory();
  const [allTransactions, setallTransactions] = useState([]);
  const [rows, setrows] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [flag, setFlag] = useState(true);
  const [ref, setref]: any = useState(null);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  useEffect(() => {
    const getAll: any = async () => {
      const res = history.location.state.sources_list;
      let temp: any = [];
      for (let i = 0; i < res.length; i++) {
        let res1 = await getTransactionDetails(res[i].ID);
        temp = [...temp, ...res1];
      }
      const obj = temp[0];
      const columns_arr: any = [];
      Object.keys(obj).map((key) => {
        const col = {
          field: key,
          headerName: key,
          width: 150,
        };
        columns_arr.push(col);
      });
      const rows_arr: any = [];
      temp.map((obj: any, index: any) => {
        const new_obj = { id: index, ...obj };
        rows_arr.push(new_obj);
      });
      setcolumns(columns_arr);
      setrows(rows_arr);
      setallTransactions(temp);
      setFlag(false);
    };
    getAll();
  }, []);

  return (
    <>
      {flag ? (
        <LoaderScreen />
      ) : (
        <AddClientContainer>
          <Header
            heading="Unified transactions"
            subheading="@WW24"
            buttonText="Export csv"
            buttonHandler={() => {
              if (ref) {
                ref.click();
              }
            }}
          />
          <DataGrid1>
            <div
              style={{
                height: "100%",
                background:
                  allTransactions.length === 0
                    ? "var(--white)"
                    : "var(--white)",
                borderRadius: 93,
              }}
            >
              {allTransactions.length != 0 ? (
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={8}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  disableSelectionOnClick
                  components={{
                    Toolbar: CustomToolbar,
                  }}
                />
              ) : (
                <NoTransactions>
                  <div className="text">No transactions available</div>
                </NoTransactions>
              )}
            </div>
          </DataGrid1>
        </AddClientContainer>
      )}
    </>
  );
};

export default Transaction;
