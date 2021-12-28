import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components/atoms/input";
import CloseIcon from "@mui/icons-material/Close";
const SubContainer1 = styled.div`
  padding: 120px;
  padding-top: 50px;
  padding-bottom: 0px;
  width: 1030px;
  min-height: 537px;
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
const CSVButtonFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9.2941px 17.5882px;
  width: fit-content;
  height: 48px;
  border: 1px solid #343a40;
  box-sizing: border-box;
  border-radius: 141.176px;
  margin: 10px;
`;
const CSVButtonFileText = styled.div`
  font-weight: 400;
  font-size: 14.9412px;
  color: #000000;
  margin-right: 5px;
`;
const CSVButtonFileSvg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: var(--lightgrey);
  }
`;
const CSVButtonFileFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const CSVButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;
const CSVButtonShowMore = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  height: 38px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 4px;
  &:hover {
    font-weight: 600;
    font-size: 15px;
  }
`;
const AddBankDetails = ({ sourceData, setSouceData }: any) => {
  const inputFile: any = useRef(null);
  const [sourceName, setSouceName] = useState("");
  const [ccType, setccType] = useState("");
  const [cardProvider, setcardProvider] = useState("");
  const [digits, setDigits] = useState("");
  const [limit, setLimit] = useState("");
  const [active, setActive] = useState("");
  const [fileName, setFileName] = useState([]);
  const [base64File, setbase64File]: any = useState([{}]);
  const [flag, setFlag]: any = useState(false);
  const onButtonClick = () => {
    inputFile.current.click();
  };
  function getBase641(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  useEffect(() => {
    let res = {
      ...sourceData,
      sourceType: "cc",
      sourceName: sourceName,
      ACTIVE: active,
      ccType: ccType,
      ccProvider: cardProvider,
      cc4digits: digits,
      sourceCreditLimit: limit,
      sourceFileName: fileName,
      base64File: base64File,
    };
    setSouceData(res);
  }, [
    sourceName,
    ccType,
    cardProvider,
    digits,
    limit,
    active,
    fileName,
    base64File,
  ]);
  const fileHandler: any = async (e: any) => {
    let res: any = [];
    let res1: any = [];
    for (let i = 0; i < e.target.files.length; i++) {
      let sar1: any = {};
      sar1.name = e.target.files[i].name;
      sar1.base64File = await getBase641(e.target.files[i]);
      res.push(sar1);
      res1.push(e.target.files[i].name);
    }
    setFileName(res1);
    setbase64File(res);
  };
  const crossFileHandler: any = (file: any) => {
    let res: any = [];
    let res1: any = [];
    for (let i = 0; i < base64File.length; i++) {
      if (base64File[i].fileName === file) {
        continue;
      } else {
        res.push(base64File[i]);
      }
    }
    for (let i = 0; i < fileName.length; i++) {
      if (fileName[i] === file) {
        continue;
      } else {
        res1.push(fileName[i]);
      }
    }
    setFileName(res1);
    setbase64File(res);
  };
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
        <input
          type="file"
          accept=".csv"
          id="file"
          ref={inputFile}
          onChange={fileHandler}
          hidden
          multiple
        />
        {fileName.length === 0 ? (
          <CSVButton onClick={onButtonClick}>+ Import CSV</CSVButton>
        ) : fileName.length <= 3 ? (
          <CSVButtonContainer>
            {fileName.map((data: any) => {
              return (
                <CSVButtonFile>
                  <CSVButtonFileFlex>
                    <CSVButtonFileText>{data}</CSVButtonFileText>
                    <CSVButtonFileSvg
                      onClick={() => {
                        crossFileHandler(data);
                      }}
                    >
                      <CloseIcon />
                    </CSVButtonFileSvg>
                  </CSVButtonFileFlex>
                </CSVButtonFile>
              );
            })}
          </CSVButtonContainer>
        ) : !flag ? (
          <CSVButtonContainer>
            {[0, 1, 2].map((data: any) => {
              return (
                <CSVButtonFile>
                  <CSVButtonFileFlex>
                    <CSVButtonFileText>{fileName[data]}</CSVButtonFileText>
                    <CSVButtonFileSvg
                      onClick={() => {
                        crossFileHandler(fileName[data]);
                      }}
                    >
                      <CloseIcon />
                    </CSVButtonFileSvg>
                  </CSVButtonFileFlex>
                </CSVButtonFile>
              );
            })}
            <CSVButtonShowMore
              onClick={() => {
                setFlag(true);
              }}
            >
              Show More...
            </CSVButtonShowMore>
          </CSVButtonContainer>
        ) : (
          <CSVButtonContainer>
            {fileName.map((data: any) => {
              return (
                <CSVButtonFile>
                  <CSVButtonFileFlex>
                    <CSVButtonFileText>{data}</CSVButtonFileText>
                    <CSVButtonFileSvg
                      onClick={() => {
                        crossFileHandler(data);
                      }}
                    >
                      <CloseIcon />
                    </CSVButtonFileSvg>
                  </CSVButtonFileFlex>
                </CSVButtonFile>
              );
            })}
          </CSVButtonContainer>
        )}
      </SubContainer2>
    </SubContainer1>
  );
};

export default AddBankDetails;
