import React, { useState } from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import Input from "../../components/atoms/input";
import AddBankDetails from "./addBankDetails";
import AddCreditCard from "./addCreditCard";
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
  height: 537px;
  background: var(--lightgrey);
  border-radius: 93px;
  margin: 39px;
`;
const SubContainer1 = styled.div`
  padding: 120px;
  padding-top: 50px;
  padding-bottom: 0px;
  width: 1030px;
  height: 537px;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 93px;
`;
const SubContainer2 = styled.div`
  margin-top: 35px;
  margin-left: 42px;
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
const SubContainer11 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const SubContainerItem = styled.div`
  width: 100%;
  height: 303px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const CSVButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 178px;
  height: 48px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 106px;
  font-weight: 500;
  font-size: 16px;
  color: var(--black);
`;
const SubContainer3 = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const SubContainer3Text = styled.div`
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
// const SubContainer11 = styled.div``;
const AddSource = () => {
  const [selected, setSelected] = useState("bank");
  return (
    <AddClientContainer>
      <Header
        heading="Add a new income source"
        subheading="@WW24"
        buttonText="Submit source details"
        buttonHandler={() => {}}
      />
      <MainContainer>
        {selected === "bank" ? <AddBankDetails /> : <AddCreditCard />}
        <SubContainer3>
          <SubContainer3Text>Select source type</SubContainer3Text>
          <SubContainerBankText
            name="bank"
            selected={selected}
            onClick={() => {
              setSelected("bank");
            }}
          >
            Bank Account
          </SubContainerBankText>
          <SubContainerBankText
            name="card"
            selected={selected}
            onClick={() => {
              setSelected("card");
            }}
          >
            Credit Card
          </SubContainerBankText>
        </SubContainer3>
      </MainContainer>
    </AddClientContainer>
  );
};

export default AddSource;
