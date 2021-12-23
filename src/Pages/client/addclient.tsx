import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/atoms/input";
import SelectComponent from "../../components/atoms/select";
import Header from "../../components/molecules/header";

const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background-color: var(--black);
  width: 100%;
  height: 100vh;
`;

const Details = styled.div`
  display: flex;
  gap: 65px;
  background-color: var(--white);
  width: 80%;
  position: relative;
  border-radius: 93px;
  padding-bottom: 120px;
`;

const PersonalDetails = styled.div`
  width: 50%;
  padding-left: 75px;
`;
const FinancialDetails = styled.div`
  width: 50%;
  padding-right: 75px;
`;
const PHeading = styled.div`
  margin-top: 42px;
  font-size: 28px;
  font-weight: 600;
  color: var(--black);
  text-align: right;
  margin-bottom: 80px;
`;
const FHeading = styled(PHeading)``;

const InputContainerLeft = styled.div`
  width: 258px;
  justify-self: end;
`;

const InputContainerRight = styled.div`
  width: 258px;
  justify-self: end;
`;

const PInputFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 63px;
  justify-items: end;
`;
const FInputFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 63px;
  justify-items: start;
`;

const Divider = styled.div`
  position: absolute;
  height: 1px;
  top: 50%;
  left: 50%;
  width: 531px;
  transform: translate(-50%, -50%) rotate(90deg);
  background-color: var(--grey);
`;

const AddClient = () => {
  const SubmitData = () => {
    console.log("submit data");
  };
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [marriage_status, setmarriage_status] = useState("");
  const [dob, setdob] = useState("");
  const [noc, setnoc] = useState("");
  const [id_number, setid_number] = useState("");
  const [annual_income, setannual_income] = useState("");
  const [annual_outcome, setannual_outcome] = useState("");
  const [additional_soi, setadditional_soi] = useState([]);

  return (
    <AddClientContainer>
      <Header
        heading="Clientele details"
        subheading="Add new"
        buttonText="Submit data"
        buttonHandler={SubmitData}
      />
      <Details>
        <PersonalDetails>
          <PHeading>Personal Details</PHeading>
          <PInputFields>
            <InputContainerLeft>
              <Input
                type="text"
                label="First Name"
                placeholder="Kristin"
                height={56}
                value={firstname}
                setvalue={setfirstname}
              />
            </InputContainerLeft>
            <InputContainerLeft>
              <Input
                type="text"
                label="Last Name"
                placeholder="Watson"
                height={56}
                value={lastname}
                setvalue={setlastname}
              />
            </InputContainerLeft>
            <InputContainerLeft>
              <Input
                type="text"
                label="Number of children"
                placeholder="03"
                height={56}
                value={noc}
                setvalue={setnoc}
              />
            </InputContainerLeft>
            <InputContainerLeft>
              <Input
                type="text"
                label="Date of Birth"
                placeholder="04/12/1989"
                height={56}
                value={dob}
                setvalue={setdob}
              />
            </InputContainerLeft>
            <SelectComponent
              value={marriage_status}
              setvalue={setmarriage_status}
            />
            <InputContainerLeft>
              <Input
                type="text"
                label="Id Number"
                placeholder="SLA220154653"
                height={56}
                value={id_number}
                setvalue={setid_number}
              />
            </InputContainerLeft>
          </PInputFields>
        </PersonalDetails>
        <Divider />
        <FinancialDetails>
          <FHeading>Financial Details</FHeading>
          <FInputFields>
            <InputContainerRight>
              <Input
                type="text"
                label="Annual Outcome"
                placeholder="dfdfdfdfdf"
                height={56}
                value={annual_outcome}
                setvalue={setannual_outcome}
              />
            </InputContainerRight>
            <InputContainerRight>
              <Input
                type="text"
                label="Annual Income"
                placeholder="scsc"
                height={56}
                value={annual_income}
                setvalue={setannual_income}
              />
            </InputContainerRight>
          </FInputFields>
        </FinancialDetails>
      </Details>
    </AddClientContainer>
  );
};

export default AddClient;
