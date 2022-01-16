import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { get_Chart2Data } from "./../../api/chart";
import { Line } from "react-chartjs-2";

const SubContainer1 = styled.div`
  padding: 80px;
  padding-top: 50px;
  padding-bottom: 0px;
  width: 1030px;
  min-height: 537px;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 93px;
`;

const SubHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 28px;
  text-align: right;
  color: #343a40;
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: "40px";
`;

var chartColors = ["rgb(112, 255, 99)", "#ed5b3d"];

const ChartType1 = ({ clientId }: any) => {
  const theme: any = useSelector((state: RootState) => {
    return state.theme;
  });

  const [chartData, setChartData] = useState(null);
  const [yieldno, setyieldno] = useState(5);
  const [data, setData]: any = useState(null);

  const up = (ctx: any, value: any) => {
    console.log(ctx.p0.parsed.y, ctx.p1.parsed.y);
    if (ctx.p0.parsed.y > 0) {
      return value;
    }
    return undefined;
  };

  const down = (ctx: any, value: any) => {
    console.log(ctx.p0.parsed.y, ctx.p1.parsed.y);
    if (ctx.p0.parsed.y < 0) {
      return value;
    }
    return undefined;
  };

  useEffect(() => {
    const getData = async () => {
      const data1 = await get_Chart2Data(clientId, yieldno);
      console.log("data1", data1);
      const labels: any = [];
      const values: any = [];
      data1.slice(0, 7).map((obj: any) => {
        labels.push(obj.ForAge);
        values.push(obj.NetWorth);
      });
      console.log("labels", labels);
      console.log("values", values);
      const data = {
        labels: labels,
        datasets: [
          {
            label: "NetWorth",
            data: values,
            // borderColor: "#7D8C0B",
            // backgroundColor: "#CCF148",
            // tension: 0.4,
            fill: true,
            segment: {
              borderColor: (ctx: any) =>
                //@ts-ignore
                up(ctx, "#CCF148") || down(ctx, "rgba(255,26,104,1)"),
              backgroundColor: (ctx: any) =>
                //@ts-ignore
                up(ctx, "#CCF148") || down(ctx, "rgba(255,26,104,1)"),
            },
          },
        ],
      };
      console.log("dataa", data);
      setData(data);
      setChartData(data1);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <SubContainer1>
      <SubHeader>Long Term Capital </SubHeader>
      {chartData ? (
        <SubContainer>
          <div style={{ height: "400px", width: "450px", marginTop: "25px" }}>
            <Line options={options} data={data} />
          </div>
          {/* <ChartDetailsCard
            theme={`${theme ? "light" : "dark"}`}
            chartData={chartData}
          /> */}
        </SubContainer>
      ) : null}
    </SubContainer1>
  );
};

export default ChartType1;
