import React, { useState } from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import Input from "../../components/atoms/input";
const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--black);
  width: 100%;
  min-height: 100vh;
`;
const MainContainer = styled.div`
  width: 1395px;
  height: 637px;
  background: var(--lightgrey);
  border-radius: 93px;
  margin: 39px;
`;
const SubContainer1 = styled.div`
  padding: 120px;
  padding-top: 50px;
  width: 1030px;
  height: 637px;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 93px;
`;
const SubContainer2 = styled.div``;
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
  justify-content: space-between;
`;
const SubContainerItem = styled.div``;
// const SubContainer11 = styled.div``;
const AddSource = () => {
  const [bank, setBank] = useState("");
  const [iban, setiban] = useState("");
  const [name, setname] = useState("");
  const [accNumber, setaccNumber] = useState("");
  return (
    <AddClientContainer>
      <Header
        heading="Add a new income source"
        subheading="@WW24"
        buttonText="Submit source details"
        buttonHandler={() => {}}
      />
      <MainContainer>
        <SubContainer1>
          <SubHeader>Enter account details</SubHeader>
          <SubContainer11>
            <SubContainerItem>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="text"
                  label="Bank name"
                  placeholder="Bank Leumi Le-Israel B.M"
                  height={50}
                  value={bank}
                  setvalue={setBank}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="text"
                  label="Bank name"
                  placeholder="Bank Leumi Le-Israel B.M"
                  height={50}
                  value={bank}
                  setvalue={setBank}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="text"
                  label="Bank name"
                  placeholder="Bank Leumi Le-Israel B.M"
                  height={50}
                  value={bank}
                  setvalue={setBank}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="text"
                  label="Bank name"
                  placeholder="Bank Leumi Le-Israel B.M"
                  height={50}
                  value={bank}
                  setvalue={setBank}
                />
              </div>
            </SubContainerItem>
            <SubContainerItem>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="text"
                  label="Bank name"
                  placeholder="Bank Leumi Le-Israel B.M"
                  height={50}
                  value={bank}
                  setvalue={setBank}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="text"
                  label="Bank name"
                  placeholder="Bank Leumi Le-Israel B.M"
                  height={50}
                  value={bank}
                  setvalue={setBank}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="text"
                  label="Bank name"
                  placeholder="Bank Leumi Le-Israel B.M"
                  height={50}
                  value={bank}
                  setvalue={setBank}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="text"
                  label="Bank name"
                  placeholder="Bank Leumi Le-Israel B.M"
                  height={50}
                  value={bank}
                  setvalue={setBank}
                />
              </div>
            </SubContainerItem>
          </SubContainer11>
        </SubContainer1>
        <SubContainer2></SubContainer2>
      </MainContainer>
    </AddClientContainer>
  );
};

export default AddSource;
