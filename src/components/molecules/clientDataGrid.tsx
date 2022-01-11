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
import { delete_Transaction } from "../../api/delete";
import { toast } from "react-toastify";
import { Checkbox } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

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
  left: 50px;
  z-index: 2;
  color: var(--grid-text);
  height: 40px;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 40px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const DeleteTransactionButton = styled.div`
  position: absolute;
  bottom: 20px;
  left: 110px;
  z-index: 2;
  color: var(--grid-text);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 40px;
    &:hover {
      opacity: 0.8;
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
  const [loader, setloader] = useState(true);
  const [selected, setselected]: any = useState(null);
  const [flag, setflag] = useState(false);

  const onChangeHandler = (e: any) => {
    console.log("value", e);
  };

  useEffect(() => {
    const genResults = async () => {
      try {
        const res = await getTransactionDetails(source_id);
        if (res.length == 0) {
          setloader(false);
          settransactions(null);
        } else {
          console.log("arr", res);
          settransactions(true);
          const obj = res[0];
          const columns_arr: any = [];
          Object.keys(obj).map((key) => {
            let f = true;
            const col = {
              field: key,
              width: 150,
              editable: true,
            };
            if (key == "finalAmount") {
              const new_col = {
                field: key,
                width: 150,
                editable: false,
                renderCell: (params: any) => {
                  const row = params.row;
                  return parseFloat(row.amount) / parseFloat(row.multiPlyer);
                },
              };
              columns_arr.push(new_col);
              f = false;
            }
            if (key == "excludeFlg") {
              const new_col = {
                field: key,
                headerName: key,
                width: 150,
                editable: false,
                renderCell: (params: any) => {
                  return (
                    <Checkbox
                      checked={params.value == "N" ? false : true}
                      onChange={(e) => {
                        handleCheckboxChange(
                          params.id,
                          params.field,
                          e.target.checked
                        );
                      }}
                    />
                  );
                },
              };
              columns_arr.push(new_col);
              f = false;
            }
            if (key == "inOut") {
              const new_col = {
                field: key,
                headerName: key,
                width: 150,
                editable: false,
                renderCell: (params: any) => {
                  // console.log("params", params);
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      {params.value}
                      {/* <select
                        style={{ border: "none", background: "none" }}
                        value={params.value}
                        onChange={(e) => {
                          handleOptionChange(
                              params.id,
                            params.field,
                            e.target.value
                          );
                        }}
                      >
                        {InOut_Options.map((opt: any) => {
                          return (
                            <option
                              style={{ background: "white", color: "black" }}
                              value={opt.value}
                            >
                              {opt.name}
                            </option>
                          );
                        })}
                      </select> */}
                    </div>
                  );
                },
              };
              columns_arr.push(new_col);
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
          console.log("rows-arrary", rows_arr);
          setcolumns(columns_arr);
          setrows(rows_arr);
          setloader(false);
        }
      } catch (err) {
        console.log(err);
        setloader(false);
      }
    };

    if (source_id) {
      genResults();
    } else {
      setloader(false);
    }
  }, [source_id, flag]);

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
      multiplyer: "1",
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
    console.log("response", res);
    setflag((prev) => !prev);
  };

  const handleCheckboxChange = async (
    id: any,
    field: any,
    checked: boolean
  ) => {
    let val;
    if (checked) {
      val = "Y";
    } else val = "N";
    console.log("id", id);
    const row_data: any = rows.filter((x: any) => x.ID == id);
    const new_obj = {
      ...row_data[0],
      [field]: val,
    };
    console.log("changed", new_obj);
  };

  const handleOptionChange = (id: any, field: any, val: any) => {
    console.log("id", id);
    console.log("rows", rows);
    const row_data: any = rows.filter((x: any) => x.ID == id);
    console.log("rwo_data", row_data);
    const new_obj = {
      ...row_data[0],
      [field]: val,
    };
    console.log("changed", new_obj);
  };

  const handleChangeRow = async (obj: any, event: any) => {
    const row = obj.row;
    const value = obj.value;
    const field = obj.field;
    const new_obj = {
      ...row,
      [field]: value,
    };
    console.log(new_obj, "new_obj");
    delete new_obj.CREATED;
    const res = await updateTransaction(new_obj);
    console.log("response", res);
  };

  const handleChangeRow1 = async (row: any) => {
    console.log("inside");
    const id = row.id;
    const value = row.value;
    const row_data: any = rows.filter((x: any) => x.ID == id);
    console.log("row_dat", row_data);
    const new_obj = {
      ...row_data[0],
      [row.field]: value,
    };
    console.log(new_obj, "new_obj");
    delete new_obj.CREATED;
    const res = await updateTransaction(new_obj);
    console.log("response", res);
  };

  const deleteSelected = async () => {
    if (selected) {
      selected.forEach(async (id: any) => {
        console.log("id", id, source_id);
        const res = await delete_Transaction(id, source_id);
        console.log(res);
        setflag((prev) => !prev);
      });
    } else {
      toast.warning("Please Select the Transaction to Delete");
    }
  };

  useEffect(() => {
    console.log("selected", selected);
  }, [selected]);

  return (
    <div
      style={{
        height: "100%",
        background: !transactions ? "var(--white)" : "var(--white)",
        borderRadius: 93,
      }}
    >
      {loader ? (
        <NoTransactions>
          <CircularProgress
            color="inherit"
            style={{ color: "white" }}
            size={70}
          />
        </NoTransactions>
      ) : transactions ? (
        <Fragment>
          <Fragment>
            <AddTransactionButton onClick={generateTransaction}>
              <AddCircleIcon />
            </AddTransactionButton>
            <DeleteTransactionButton onClick={deleteSelected}>
              <DeleteIcon />
            </DeleteTransactionButton>
          </Fragment>
          <DataGrid
            rows={rows}
            getRowId={(row) => row.ID}
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
            onSelectionModelChange={(e) => setselected(e)}
          />
        </Fragment>
      ) : (
        <NoTransactions>
          <div className="text">No transactions available</div>
          <AddTransactionButton onClick={generateTransaction}>
            <AddCircleIcon />
          </AddTransactionButton>
        </NoTransactions>
      )}
    </div>
  );
};

export default ClientDataGrid;
