import { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getTransactionDetails, get_Dropdown } from "../../api/get";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { updateTransaction } from "../../api/update";
import { create_Transaction } from "../../api/create";
import SvgPlusIcon from "../../components/vectors/PlusIcon";
import { Tooltip } from "@mui/material";
// import Select from "../atoms/select";
import { delete_Transaction } from "../../api/delete";
import { toast } from "react-toastify";
import { Checkbox } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
interface ClientDataGridProps {
  source_id: any;
}

const NoTransactions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 93px;
  border: 2px solid var(--ink-icon);
  background-color: var(--background);
  .text {
    font-weight: 500;
    font-size: 35.102px;
    text-align: center;
    color: var(--ink-icon);
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

const dropdown_name_arr = ["TRANS_TYPE", "TRANS_SUB_TYPE"];

const ClientDataGrid = ({ source_id }: ClientDataGridProps) => {
  const [rows, setrows] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [transactions, settransactions]: any = useState(null);
  const [loader, setloader] = useState(true);
  const [selected, setselected]: any = useState(null);
  const [flag, setflag] = useState(false);
  const [type, settype] = useState("hello");
  const [dropdown_options, setdropdown_options] = useState({
    type: [],
    subtype: [],
  });

  useEffect(() => {
    const getDropdownValues = async () => {
      dropdown_name_arr.forEach(async (name) => {
        const res = await get_Dropdown(name);
        const arr: any = [];
        res.forEach((lov: any) => {
          const obj = {
            value: lov.LOV_CODE,
            name: lov.LOV_VAL,
          };
          arr.push(obj);
        });
        if (name == "TRANS_TYPE") {
          setdropdown_options((prev) => {
            return {
              ...prev,
              type: arr,
            };
          });
        } else {
          setdropdown_options((prev) => {
            return {
              ...prev,
              subtype: arr,
            };
          });
        }
      });
    };
    getDropdownValues();
  }, []);

  useEffect(() => {
    const genResults = async () => {
      try {
        const res = await getTransactionDetails(source_id);
        if (res.length == 0) {
          setloader(false);
          settransactions(null);
        } else {
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
            if (key == "amount") {
              const new_col = {
                field: key,
                width: 150,
                editable: true,
                renderCell: (params: any) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span
                        style={{ fontSize: 20, transform: "translateY(-5%)" }}
                      >
                        ₪
                      </span>{" "}
                      <span>{params.value}</span>
                    </div>
                  );
                },
              };
              columns_arr.push(new_col);
              f = false;
            }
            if (key == "finalAmount") {
              const new_col = {
                field: key,
                width: 150,
                editable: true,
                renderCell: (params: any) => {
                  const row = params.row;
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span
                        style={{ fontSize: 20, transform: "translateY(-5%)" }}
                      >
                        ₪
                      </span>
                      <span>
                        {(
                          parseFloat(row.amount) / parseFloat(row.multiPlyer)
                        ).toFixed(1)}
                      </span>
                    </div>
                  );
                },
              };
              columns_arr.push(new_col);
              f = false;
            }
            if (key == "type") {
              const new_col = {
                field: key,
                width: 150,
                editable: true,
                renderCell: (params: any) => {
                  const row = params.row;
                  return (
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <Select
                          value={params.value}
                          onChange={(e) =>
                            handleOptionChange(
                              params.row,
                              params.field,
                              e.target.value
                            )
                          }
                          label="Age"
                        >
                          {dropdown_options.type.map((item: any) => {
                            return (
                              <MenuItem value={item.value}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  );
                },
              };
              columns_arr.push(new_col);
              f = false;
            }
            if (key == "subType") {
              const new_col = {
                field: key,
                width: 150,
                editable: true,
                renderCell: (params: any) => {
                  const row = params.row;
                  return (
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <Select
                          value={params.value}
                          onChange={(e) =>
                            handleOptionChange(
                              params.row,
                              params.field,
                              e.target.value
                            )
                          }
                        >
                          {dropdown_options.subtype.map((item: any) => {
                            return (
                              <MenuItem value={item.value}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  );
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
                      checked={params.value == "Y" ? true : false}
                      onChange={(e) => {
                        handleCheckboxChange(
                          params.row,
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
                  return (
                    <div>
                      <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <Select
                          value={params.value}
                          onChange={(e) =>
                            handleOptionChange(
                              params.row,
                              params.field,
                              e.target.value
                            )
                          }
                        >
                          {InOut_Options.map((item: any) => {
                            return (
                              <MenuItem value={item.value}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
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
          setcolumns(columns_arr);
          setrows(rows_arr);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (source_id) {
      genResults();
    } else {
      setloader(false);
    }
  }, [source_id, flag, dropdown_options]);

  useEffect(() => {
    if (
      dropdown_options.subtype.length > 0 &&
      dropdown_options.type.length > 0
    ) {
      setTimeout(() => setloader(false), 1000);
    }
  }, [dropdown_options]);

  const addTransaction = async () => {
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
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    };
    const res = await create_Transaction(mod_data, source_id);
    console.log(mod_data);
    setflag((prev) => !prev);
    toast.success("New Transaction Created");
  };

  const handleCheckboxChange = async (
    row: any,
    field: any,
    checked: boolean
  ) => {
    let val;
    if (checked) {
      val = "Y";
    } else val = "N";
    const new_obj = {
      ...row,
      [field]: val,
    };
    console.log("new_obj", row);
    const res = await updateTransaction(new_obj);
    console.log("response", res);
    setflag((prev) => !prev);
  };

  const handleOptionChange = async (row: any, field: any, val: any) => {
    const new_obj = {
      ...row,
      [field]: val,
    };
    // console.log("changed", new_obj);
    const res = await updateTransaction(new_obj);
    setflag((prev) => !prev);
    // console.log("response", res);
  };

  const handleChangeRow = async (obj: any, event: any) => {
    const row = obj.row;
    const value = obj.value;
    const field = obj.field;
    const new_obj = {
      ...row,
      [field]: value,
    };
    // console.log(new_obj, "new_obj");
    delete new_obj.CREATED;
    const res = await updateTransaction(new_obj);
    setflag((prev) => !prev);
    // console.log("response", res);
  };

  const handleChangeRow1 = async (row: any) => {
    const id = row.id;
    const value = row.value;
    const row_data: any = rows.filter((x: any) => x.ID == id);
    const new_obj = {
      ...row_data[0],
      [row.field]: value,
    };
    delete new_obj.CREATED;
    const res = await updateTransaction(new_obj);
    setflag((prev) => !prev);
  };

  const deleteSelected = async () => {
    if (selected) {
      selected.forEach(async (id: any) => {
        const res = await delete_Transaction(id, source_id);
        setflag((prev) => !prev);
      });
      toast.success("Selected Transaction Deleted");
    } else {
      toast.warning("Please Select the Transaction to Delete");
    }
  };

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
            style={{ color: "var(--ink-icon)" }}
            size={70}
          />
        </NoTransactions>
      ) : transactions ? (
        <Fragment>
          <Fragment>
            <AddTransactionButton onClick={addTransaction}>
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
          <AddTransactionButton onClick={addTransaction}>
            <AddCircleIcon />
          </AddTransactionButton>
        </NoTransactions>
      )}
    </div>
  );
};

export default ClientDataGrid;
