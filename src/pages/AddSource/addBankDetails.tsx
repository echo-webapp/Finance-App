import React, { useState, useRef } from "react";
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
function getBase64(file: any) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
const AddBankDetails = () => {
  const inputFile: any = useRef(null);
  const [sourceName, setSouceName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [active, setActive] = useState("");

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  return (
    <SubContainer1>
      <SubHeader>Enter Account Details</SubHeader>
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
              label="Account Number"
              placeholder="SLA220154653"
              height={50}
              value={bankAccountNumber}
              setvalue={setBankAccountNumber}
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
              label="Bank Name"
              placeholder="Bank Leumi Le-Israel B.M"
              height={50}
              value={bankName}
              setvalue={setBankName}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Bank Branch"
              placeholder="IL950108000000090722422"
              height={50}
              value={bankBranch}
              setvalue={setBankBranch}
            />
          </div>
        </SubContainerItem>
      </SubContainer11>
      <SubContainer2>
        <input
          type="file"
          accept=".csv"
          id="file"
          ref={inputFile}
          onChange={(e: any) => {
            getBase64(e.target.files[0]);
            // console.log(e.target.files[0]);
          }}
          hidden
        />
        <CSVButton onClick={onButtonClick}>+ Import CSV</CSVButton>
      </SubContainer2>
    </SubContainer1>
  );
};

export default AddBankDetails;
