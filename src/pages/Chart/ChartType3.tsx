import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CircularProgress } from "@mui/material";
import { get_Chart3Data } from "./../../api/chart";
import PieChart from "./PieChart";
import { DataGrid } from "@mui/x-data-grid";
import ChartGrid from "../../components/molecules/ChartGrid";
const SubContainer1 = styled.div`
  padding: 20px;
  /* padding-top: 50px; */
  padding-bottom: 0px;
  width: 1030px;
  min-height: 537px;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubHeader = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SubHeaderItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  .chart-selected {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    width: 126px;
    height: 48px;
    border: 1px solid #343a40;
    border-radius: 106px;
  }
`;
const SubHeader1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`;
const MainContainer = styled.div`
  height: 500px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MainContainer1 = styled.div`
  height: 400px;
  width: 57%;
`;
const ChartType3 = ({ clientId }: any) => {
  const [type, setType] = useState("In");
  const [option, setOption] = useState("Type");
  const [loading, setLoading] = useState(true);
  const [rows, setrows] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [chartData, setChartData]: any = useState([]);
  const handleChange = (event: any) => {
    setOption(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await get_Chart3Data(clientId, type, option);
      setChartData(data);
      setLoading(false);
    };
    getData();
  }, [type, option]);

  useEffect(() => {
    const columns_arr: any = [];
    columns_arr.push({
      field: "Category",
      headerName: "Category",
      width: 160,
    });
    columns_arr.push({
      field: "Amount",
      headerName: "Amount",
      width: 150,
    });
    columns_arr.push({
      field: "Expenses",
      headerName: "% Expenses",
      width: 150,
    });
    setcolumns(columns_arr);
    const rows_arr: any = [];
    for (let i = 0; i < chartData.length; i++) {
      let temp: any = {};
      temp.id = i;
      temp.Category = chartData[i].GroupName;
      temp.Amount = chartData[i].Amount;
      temp.Expenses = chartData[i].Precents.toFixed(2);
      rows_arr.push(temp);
    }
    setrows(rows_arr);
  }, [chartData]);

  return (
    <SubContainer1>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <SubHeader>
            <SubHeaderItem
              onClick={() => {
                setType("In");
              }}
            >
              {type === "In" ? (
                <div className="chart-selected">Income</div>
              ) : (
                <div>Income</div>
              )}
            </SubHeaderItem>
            <SubHeaderItem
              onClick={() => {
                setType("Out");
              }}
            >
              {type === "Out" ? (
                <div className="chart-selected">Expense</div>
              ) : (
                <div>Expense</div>
              )}
            </SubHeaderItem>
          </SubHeader>
          <SubHeader1>
            <div>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={option}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={"Type"}>By Category</MenuItem>
                  <MenuItem value={"Subtype"}>
                    By Category and Sub Category
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </SubHeader1>
          <MainContainer>
            <div
              style={{
                height: "500px",
                width: "350px",
              }}
            >
              <PieChart chartData={chartData} />
            </div>
            <MainContainer1>
              <ChartGrid rows={rows} columns={columns} />
            </MainContainer1>
          </MainContainer>
        </>
      )}
    </SubContainer1>
  );
};

export default ChartType3;
