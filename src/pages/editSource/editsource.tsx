import { useState, useEffect } from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import AddBankDetails from "./editBankDetails";
import AddCreditCard from "./editCreditCard";

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

const EditSource = ({ match }: any) => {
  const history: any = useHistory();
  const [sourceData, setSourceData]: any = useState(
    history.location.state.source_details
  );
  console.log(history.location.state.source_details);
  const [selected, setSelected]: any = useState(
    history.location.state.selected_source
  );
  const [flag, setFlag] = useState(false);

  const submitSourceHandler = () => {
    console.log(sourceData);
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
            buttonHandler={() => console.log("helo")}
          />
          <MainContainer>
            {selected === "bank" ? (
              <AddBankDetails
                sourceData={sourceData}
                setSouceData={setSourceData}
              />
            ) : (
              <AddCreditCard
                sourceData={sourceData}
                setSouceData={setSourceData}
              />
            )}
            <SubContainer>
              <SubContainerText>Select source type</SubContainerText>
              <div className="buttons">
                <SubContainerButtonText
                  name="bank"
                  selected={selected}
                  onClick={() => {
                    setSourceData(Initial_State);
                    setSelected("bank");
                  }}
                >
                  Bank Account
                </SubContainerButtonText>
                <SubContainerButtonText
                  name="cc"
                  selected={selected}
                  onClick={() => {
                    setSourceData(Initial_State);
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

export default EditSource;
