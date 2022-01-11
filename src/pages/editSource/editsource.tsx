import { useState } from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import EditBankDetails from "./editBankDetails";
import EditCreditCard from "./editCreditCard";
import { create_CSV } from "../../api/create";
import { useHistory } from "react-router";
import LoaderScreen from "../../components/molecules/LoaderScreen";
import { toast } from "react-toastify";
import SvgArrowleft from "../../components/vectors/Arrowleft";
import { updateSource } from "../../api/update";
import Modal from "@mui/material/Modal";
import DeleteObject from "../../components/molecules/deleteObjects";
import Backdrop from "@mui/material/Backdrop";

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

const EditSource = ({ match }: any) => {
  const history: any = useHistory();
  const [sourceData, setSourceData]: any = useState(
    history.location.state.source_details
  );
  const [open, setopen] = useState(false);
  const [clientId, setclientId] = useState(history.location.state.clientId);
  const [fileName, setfileName] = useState([]);
  const [base64File, setbase64File]: any = useState([]);

  const [selected, setSelected]: any = useState(
    history.location.state.selected_source
  );
  const [flag, setFlag] = useState(false);
  const [deleteId, setdeleteId] = useState("");

  const submitHandler = async () => {
    setFlag(true);
    let res1 = {
      ...sourceData,
    };
    console.log("selected", selected);
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
        delete res1.sourceFileName;
        delete res1.base64File;
        delete res1.CREATED;
        console.log("updatesource", res1);
        const res2 = await updateSource(res1);
        for (let i = 0; i < base64File.length; i++) {
          const res = await create_CSV(base64File[i], match.params.id);
        }
        setFlag(false);
        if (Array.isArray(res2)) {
          history.push(`/allsources/${clientId}`);
        }
      }
      setFlag(false);
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
        console.log("inside4");
        delete res1.sourceFileName;
        delete res1.base64File;
        delete res1.CREATED;
        console.log("updatesource", res1);
        const res2 = await updateSource(res1);
        for (let i = 0; i < base64File.length; i++) {
          const res = await create_CSV(base64File[i], match.params.id);
        }
        if (Array.isArray(res2)) {
          history.push(`/allsources/${clientId}`);
        }
      }
      setFlag(false);
    }
  };

  return (
    <>
      {flag ? (
        <LoaderScreen />
      ) : (
        <AddClientContainer>
          <Header
            heading="Edit income source"
            subheading="@WW24"
            buttonText="Submit source details"
            buttonHandler={submitHandler}
          />
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => setopen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DeleteObject
              id={deleteId}
              parid={match.params.id}
              text={"Delete this CSV?"}
              type={"csv"}
              handleClose={() => setopen(false)}
            />
          </Modal>

          <MainContainer>
            {selected === "bank" ? (
              <EditBankDetails
                open={open}
                setopen={setopen}
                sourceData={sourceData}
                setSourceData={setSourceData}
                fileName={fileName}
                setfileName={setfileName}
                base64File={base64File}
                setbase64File={setbase64File}
                setdeleteId={setdeleteId}
              />
            ) : (
              <EditCreditCard
                open={open}
                setopen={setopen}
                sourceData={sourceData}
                setSouceData={setSourceData}
                fileName={fileName}
                setfileName={setfileName}
                base64File={base64File}
                setbase64File={setbase64File}
                setdeleteId={setdeleteId}
              />
            )}
            <SubContainer>
              <SubContainerText>Source type</SubContainerText>
              <div className="buttons">
                {selected == "bank" ? (
                  <SubContainerButtonText name="bank" selected={selected}>
                    Bank Account
                  </SubContainerButtonText>
                ) : (
                  <SubContainerButtonText name="cc" selected={selected}>
                    Credit Card
                  </SubContainerButtonText>
                )}
              </div>
            </SubContainer>
          </MainContainer>
        </AddClientContainer>
      )}
    </>
  );
};

export default EditSource;
