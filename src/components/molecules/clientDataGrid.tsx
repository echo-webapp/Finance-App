import { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getTransactionDetails } from "../../api/get";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { updateTransaction } from "../../api/update";
import { create_Transaction } from "../../api/create";
import SvgPlusIcon from "../../components/vectors/PlusIcon";
import { Tooltip } from "@mui/material";
import Select from "../atoms/select";

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

const AddTransactionButton = styled.div`
  position: absolute;
  bottom: 20px;
  left: 40px;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
  svg {
    &:hover {
      circle {
        fill: #aaa;
      }
      line {
        /* stroke: var(--white); */
      }
    }
  }
`;

const InOut_Options = [
  { value: "in", name: "In" },
  { value: "out", name: "Out" },
];

const ClientDataGrid = ({ source_id }: ClientDataGridProps) => {
  const [rows, setrows] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [transactions, settransactions]: any = useState(null);
  const [flag, setFlag] = useState(true);
  const [data, setdata]: any = useState(null);

  const onChangeHandler = (e: any) => {
    console.log("value", e);
  };

  const update_transaction = async (id: any, value: any) => {};

  useEffect(() => {
    const genResults = async () => {
      try {
        const res = await getTransactionDetails(source_id);
        if (res.length == 0) {
          setFlag(false);
          settransactions(null);
        } else {
          settransactions(true);
          const obj = res[0];
          const columns_arr: any = [];
          Object.keys(obj).map((key) => {
            let f = true;
            const col = {
              field: key,
              headerName: key,
              width: 150,
              editable: true,
            };
            if (key == "inOut") {
              const new_col = {
                field: key,
                headerName: key,
                width: 150,
                editable: true,
                renderCell: (params: any) => (
                  <Select
                    value={params.value}
                    setvalue={onChangeHandler}
                    options={InOut_Options}
                  />
                ),
              };
              columns_arr.push(new_col);
              console.log("inside");
              f = false;
            }
            if (key == "CREATED" || key == "ID" || key == "sourceId") f = false;
            if (f) columns_arr.push(col);
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
      } catch (err) {
        console.log(err);
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
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
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
    const new_obj = {
      ...row,
      [field]: value,
    };
    delete new_obj.CREATED;
    console.log(new_obj, "new_obj");
    const res = await updateTransaction(new_obj);
    console.log("response", res);
  };

  const handleChangeRow1 = async (row: any) => {
    const id = row.id;
    const value = row.value;
    const row_data: any = rows[id];
    delete row_data.CREATED;
    const new_obj = {
      ...row_data,
      [row.field]: value,
    };
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
          <Tooltip title="Add Transaction">
            <AddTransactionButton onClick={generateTransaction}>
              <SvgPlusIcon />
            </AddTransactionButton>
          </Tooltip>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            onCellEditCommit={(v, e: any) => {
              if (e.key == "Enter") {
                handleChangeRow1(v);
              } else {
                handleChangeRow(v, e);
              }
            }}
          />
        </Fragment>
      ) : (
        <NoTransactions>
          <div className="text">No transactions available</div>
          <AddTransactionButton onClick={generateTransaction}>
            <SvgPlusIcon />
          </AddTransactionButton>
        </NoTransactions>
      )}
    </div>
  );
};

export default ClientDataGrid;
