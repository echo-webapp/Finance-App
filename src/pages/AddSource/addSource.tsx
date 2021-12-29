import React, { useState, useEffect } from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import AddBankDetails from "./addBankDetails";
import AddCreditCard from "./addCreditCard";
import { create_ClientSource } from "./../../api/create";
import { create_CSV } from "../../api/create";
import { useHistory } from "react-router";
import LoaderScreen from "../../components/molecules/LoaderScreen";

const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--black);
  width: 100%;
  min-height: 100vh;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1395px;
  min-height: 537px;
  background: var(--lightgrey);
  border-radius: 93px;
  margin: 39px;
`;

const SubContainer = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const SubContainerText = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: var(--black);
  margin-top: 50px;
`;

interface SubContainerBankTextProps {
  name: string;
  selected: string;
}

const SubContainerBankText = styled.div<SubContainerBankTextProps>`
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin-top: 34px;
  color: ${(props) => {
    if (props.name == props.selected) {
      return "white";
    }
  }};
  background: ${(props) => {
    if (props.name == props.selected) {
      return "#343A40";
    }
  }};
  border-radius: ${(props) => {
    if (props.name == props.selected) {
      return "106px";
    }
  }};
  width: ${(props) => {
    if (props.name == props.selected) {
      return "222px";
    }
  }};
  height: ${(props) => {
    if (props.name == props.selected) {
      return "64px";
    }
  }};
  display: ${(props) => {
    if (props.name == props.selected) {
      return "flex";
    }
  }};
  flex-direction: ${(props) => {
    if (props.name == props.selected) {
      return "column";
    }
  }};
  align-items: ${(props) => {
    if (props.name == props.selected) {
      return "center";
    }
  }};
  justify-content: ${(props) => {
    if (props.name == props.selected) {
      return "center";
    }
  }};
`;

const Initial_State: any = {
  sourceType: "",
  sourceName: "",
  bankName: "",
  bankBranch: "",
  bankAccountNumber: "",
  ACTIVE: "",
  ccType: "",
  ccProvider: "",
  cc4digits: "",
  sourceCreditLimit: "",
  sourceFileName: [],
  base64File: [{}],
};
const AddSource = ({ match }: any) => {
  const history = useHistory();
  const [sourceData, setSouceData]: any = useState(Initial_State);
  const [selected, setSelected]: any = useState("bank");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log(history.location.state);
    if (history.location.state) {
      setSelected(history.location.state);
    }
  }, []);

  const submitHandler = async () => {
    setFlag(true);
    let res1 = {
      ...sourceData,
    };
    delete res1.sourceFileName;
    delete res1.base64File;
    const res2 = await create_ClientSource(res1, match.params.id);
    let result = res2[res2.length - 1];
    for (let i = 0; i < sourceData.base64File.length; i++) {
      const res = await create_CSV(sourceData.base64File[i], result.ID);
    }
    setFlag(false);
    if (Array.isArray(res2)) {
      history.push(`/source/${match.params.id}`);
    }
  };

  return (
    <>
      {flag ? (
        <LoaderScreen />
      ) : (
        <AddClientContainer>
          <Header
            heading="Add a new income source"
            subheading="@WW24"
            buttonText="Submit source details"
            buttonHandler={submitHandler}
          />
          <MainContainer>
            {selected === "bank" ? (
              <AddBankDetails
                sourceData={sourceData}
                setSouceData={setSouceData}
              />
            ) : (
              <AddCreditCard
                sourceData={sourceData}
                setSouceData={setSouceData}
              />
            )}
            <SubContainer>
              <SubContainerText>Select source type</SubContainerText>
              <SubContainerBankText
                name="bank"
                selected={selected}
                onClick={() => {
                  setSouceData(Initial_State);
                  setSelected("bank");
                }}
              >
                Bank Account
              </SubContainerBankText>
              <SubContainerBankText
                name="card"
                selected={selected}
                onClick={() => {
                  setSouceData(Initial_State);
                  setSelected("card");
                }}
              >
                Credit Card
              </SubContainerBankText>
            </SubContainer>
          </MainContainer>
        </AddClientContainer>
      )}
    </>
  );
};

export default AddSource;
