import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/atoms/input";
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
  margin-left: 46px;
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

const AddBankDetails = () => {
  const [sourceName, setSouceName] = useState("");
  const [ccType, setccType] = useState("");
  const [cardProvider, setcardProvider] = useState("");
  const [digits, setDigits] = useState("");
  const [limit, setLimit] = useState("");
  const [active, setActive] = useState("");
  return (
    <SubContainer1>
      <SubHeader>Enter Credit Card Details</SubHeader>
      <SubContainer11>
        <SubContainerItem>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Active"
              placeholder="Yes"
              height={50}
              value={active}
              setvalue={setActive}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Credit Card 4 Digits"
              placeholder="2422"
              height={50}
              value={digits}
              setvalue={setDigits}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Source Credit Card Limit"
              placeholder="20000$"
              height={50}
              value={limit}
              setvalue={setLimit}
            />
          </div>
        </SubContainerItem>
        <SubContainerItem>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Source Name"
              placeholder="My Main Bank"
              height={50}
              value={sourceName}
              setvalue={setSouceName}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Credit Card Type"
              placeholder="Visa"
              height={50}
              value={ccType}
              setvalue={setccType}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Card Card Provider"
              placeholder="Bank Leumi Le-Israel B.M"
              height={50}
              value={cardProvider}
              setvalue={setcardProvider}
            />
          </div>
        </SubContainerItem>
      </SubContainer11>
      <SubContainer2>
        <CSVButton>+ Import CSV</CSVButton>
      </SubContainer2>
    </SubContainer1>
  );
};

export default AddBankDetails;
