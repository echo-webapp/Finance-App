import React, { useState, useEffect } from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import AddBankDetails from "./addBankDetails";
import AddCreditCard from "./addCreditCard";
import { create_ClientSource } from "./../../api/create";
import { create_CSV } from "../../api/create";
import { useHistory } from "react-router";
import LoaderScreen from "../../components/molecules/LoaderScreen";
import { toast } from "react-toastify";
import SvgArrowleft from "../../components/vectors/Arrowleft";

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
  font-weight: 500;
  font-size: 18px;
  padding: 24px 48px;
  width: 230px;
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

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  width: 70%;
  max-width: 1500px;
  height: 70px;
  border-bottom: 1px solid #adb5bd;
`;

const SubHeader1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .arrow-left {
    margin-left: 20px;
    position: relative;
    height: 50px;
    width: 50px;
    padding: 10px;
    border-radius: 50px;
    color: white;
    svg {
      vertical-align: middle;
      height: 100%;
      width: 100%;
    }
    &:hover {
      background-color: #eee;
      cursor: pointer;
      color: black;
    }
  }
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
};

const AddSource = ({ match }: any) => {
  const history = useHistory();
  const [sourceData, setSouceData]: any = useState(Initial_State);
  const [selected, setSelected]: any = useState("bank");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (history.location.state) {
      setSelected(history.location.state);
    }
  }, []);

  const submitHandler = async (e: any) => {
    let res1 = {
      ...sourceData,
    };
    if (selected == "bank") {
      console.log("inside");
      if (
        res1.sourceName == "" ||
        res1.bankName == "" ||
        res1.bankBranch == "" ||
        res1.ACTIVE == "" ||
        res1.bankAccountNumber == ""
      ) {
        console.log("inside1");
        toast.warning("Please Fill All Required Field");
      } else {
        setFlag(true);
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
      }
    }
    if (selected == "cc") {
      if (
        res1.sourceName == "" ||
        res1.ccType == "" ||
        res1.ccProvider == "" ||
        res1.cc4digits == "" ||
        res1.ACTIVE == "" ||
        res1.sourceCreditLimit == ""
      ) {
        console.log("inside3");
        toast.warning("Please Fill All Required Field");
      } else {
        setFlag(true);
        console.log("inside4");
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
      }
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
              <div className="buttons">
                <SubContainerButtonText
                  name="bank"
                  selected={selected}
                  onClick={() => {
                    setSouceData(Initial_State);
                    setSelected("bank");
                  }}
                >
                  Bank Account
                </SubContainerButtonText>
                <SubContainerButtonText
                  name="cc"
                  selected={selected}
                  onClick={() => {
                    setSouceData(Initial_State);
                    setSelected("cc");
                  }}
                >
                  Credit Card
                </SubContainerButtonText>
              </div>
            </SubContainer>
          </MainContainer>
        </AddClientContainer>
      )}
    </>
  );
};

export default AddSource;
