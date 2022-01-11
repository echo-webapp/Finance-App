import { useState, useRef, useEffect, Fragment } from "react";
import styled from "styled-components";
import Input from "../../components/atoms/input";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { get_CSV } from "../../api/get";
import { delete_CSV } from "../../api/delete";
import { create_CSV } from "../../api/create";

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

const CSVUploadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 400;
  color: var(--black);
  width: 30px;
  height: 30px;
  padding: 20px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background: #eee;
  }
`;

const EditCreditCard = ({
  open,
  setopen,
  sourceData,
  setSouceData,
  fileName,
  setfileName,
  base64File,
  setbase64File,
  setdeleteId,
}: any) => {
  const inputFile: any = useRef(null);
  const [allcsv, setallcsv] = useState([]);

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

  const fileHandler: any = async (e: any) => {
    let res: any = [...base64File];
    let res1: any = [...fileName];
    let flag = true;
    const arr = allcsv.map((csv: any) => {
      return csv.name;
    });
    for (let i = 0; i < e.target.files.length; i++) {
      if (
        res1.includes(e.target.files[i].name) ||
        arr.includes(e.target.files[i].name)
      ) {
        flag = false;
      }
    }
    if (flag) {
      for (let i = 0; i < e.target.files.length; i++) {
        let sar1: any = {};
        sar1.name = e.target.files[i].name;
        sar1.base64File = await getBase641(e.target.files[i]);
        res.push(sar1);
        res1.push(e.target.files[i].name);
      }
      setfileName(res1);
      setbase64File(res);
    } else {
      toast.warning("Cannot Upload Same File Again");
    }
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
    setfileName(res1);
    setbase64File(res);
  };

  useEffect(() => {
    const getAllcsv = async () => {
      const res = await get_CSV(sourceData.ID);
      console.log(res);
      setallcsv(res);
    };
    getAllcsv();
  }, [open]);

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
              value={sourceData.ACTIVE}
              setvalue={setSouceData}
              name="ACTIVE"
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Credit Card 4 Digits"
              placeholder="2422"
              height={50}
              value={sourceData.cc4digits}
              setvalue={setSouceData}
              name="cc4digits"
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Source Credit Card Limit"
              placeholder="20000$"
              height={50}
              value={sourceData.sourceCreditLimit}
              setvalue={setSouceData}
              name="sourceCreditLimit"
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
              value={sourceData.sourceName}
              setvalue={setSouceData}
              name="sourceName"
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Credit Card Type"
              placeholder="Visa"
              height={50}
              value={sourceData.ccType}
              setvalue={setSouceData}
              name="ccType"
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              type="text"
              label="Credit Card Provider"
              placeholder="Bank Leumi Le-Israel B.M"
              height={50}
              value={sourceData.ccProvider}
              setvalue={setSouceData}
              name="ccProvider"
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
          <CSVButtonContainer>
            {allcsv.length > 0 ? (
              <Fragment>
                <CSVUploadButton onClick={onButtonClick}>
                  <span>+</span>
                </CSVUploadButton>
                {allcsv.map((data: any) => {
                  return (
                    <CSVButtonFile key={data.ID}>
                      <CSVButtonFileFlex>
                        <CSVButtonFileText>{data.name}</CSVButtonFileText>
                        <CSVButtonFileSvg
                          onClick={() => {
                            setopen(true);
                            setdeleteId(data.ID);
                          }}
                        >
                          <CloseIcon />
                        </CSVButtonFileSvg>
                      </CSVButtonFileFlex>
                    </CSVButtonFile>
                  );
                })}
              </Fragment>
            ) : (
              <CSVButton onClick={onButtonClick}>+ Import CSV</CSVButton>
            )}
          </CSVButtonContainer>
        ) : (
          <CSVButtonContainer>
            <CSVUploadButton onClick={onButtonClick}>
              <span>+</span>
            </CSVUploadButton>
            {allcsv.map((data: any) => {
              return (
                <CSVButtonFile key={data.ID}>
                  <CSVButtonFileFlex>
                    <CSVButtonFileText>{data.name}</CSVButtonFileText>
                    <CSVButtonFileSvg
                      onClick={() => {
                        setopen(true);
                        setdeleteId(data.ID);
                      }}
                    >
                      <CloseIcon />
                    </CSVButtonFileSvg>
                  </CSVButtonFileFlex>
                </CSVButtonFile>
              );
            })}
            {fileName.map((data: any) => {
              return (
                <CSVButtonFile key={data.ID}>
                  <CSVButtonFileFlex>
                    <CSVButtonFileText>{data}</CSVButtonFileText>
                    <CSVButtonFileSvg
                      onClick={() => {
                        crossFileHandler();
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

export default EditCreditCard;
