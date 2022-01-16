import React, { useState, useEffect } from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import ChartType1 from "./ChartType1";
import ChartType2 from "./ChartType2";
import ChartType3 from "./ChartType3";
import ChartType4 from "./ChartType4";
import { useHistory } from "react-router";
const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--background);
  width: 100%;
  min-height: 100vh;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center;
  justify-content: space-between; */
  width: 100%;
  max-width: 1500px;
  min-height: 650px;
  background: var(--lightgrey);
  border-radius: 93px;
  margin: 39px;
  @media only screen and (max-width: 1600px) {
    max-width: 1400px;
    min-height: 650px;
  }

  @media only screen and (max-width: 1500px) {
    max-width: 1300px;
    min-height: 600px;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 1200px;
    min-height: 550px;
  }
`;

const SubContainer = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 45px;
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;

const SubContainerText = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: var(--black);
  margin-top: 50px;
  margin-bottom: 34px;
`;

interface SubContainerBankTextProps {
  name: string;
  selected: string;
}

const SubContainerButtonText = styled.div<SubContainerBankTextProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  padding: 24px 28px;
  width: 359px;
  height: 64px;
  text-align: center;
  background: ${(props) => {
    if (props.name == props.selected) {
      return "var(--black)";
    } else {
      return "var(--card-grey)";
    }
  }};
  color: ${(props) => {
    if (props.name == props.selected) {
      return "var(--white)";
    } else {
      return "var(--black)";
    }
  }};
  border-radius: 106px;
  &:hover {
    cursor: pointer;
  }
`;

const Chart = ({ match }: any) => {
  const history = useHistory();
  const [selected, setSelected]: any = useState("type1");
  return (
    <>
      <AddClientContainer>
        <Header
          heading="Client Statistics"
          subheading="@WW24"
          buttonText="View Transactions"
          buttonHandler={() => {
            history.push(`/source/${match.params.id}`);
          }}
        />
        <MainContainer>
          {selected === "type1" ? (
            <ChartType1 clientId={match.params.id} />
          ) : selected === "type2" ? (
            <ChartType2 />
          ) : selected === "type3" ? (
            <ChartType3 clientId={match.params.id} />
          ) : (
            <ChartType4 />
          )}
          <SubContainer>
            <SubContainerText>Charts Type</SubContainerText>
            <div className="buttons">
              <SubContainerButtonText
                name="type1"
                selected={selected}
                onClick={() => {
                  setSelected("type1");
                }}
              >
                Income Expense result
              </SubContainerButtonText>
              <SubContainerButtonText
                name="type2"
                selected={selected}
                onClick={() => {
                  setSelected("type2");
                }}
              >
                Long Term Capital
              </SubContainerButtonText>
              <SubContainerButtonText
                name="type3"
                selected={selected}
                onClick={() => {
                  setSelected("type3");
                }}
              >
                Income Expense pie
              </SubContainerButtonText>
              <SubContainerButtonText
                name="type4"
                selected={selected}
                onClick={() => {
                  setSelected("type4");
                }}
              >
                Drill from Income Expense Pie
              </SubContainerButtonText>
            </div>
          </SubContainer>
        </MainContainer>
      </AddClientContainer>
    </>
  );
};

export default Chart;
