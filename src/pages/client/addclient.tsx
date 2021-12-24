import { useState } from "react";
import styled from "styled-components";
import Input from "../../components/atoms/input";
import Multiselect from "../../components/atoms/multiselect";
import SelectComponent from "../../components/atoms/select";
import Header from "../../components/molecules/header";

const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background-color: var(--black);
  width: 100%;
  min-height: 100vh;
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
  //   {"firstName":"ניסיון",
  //  "lastName":"מהשררת",
  //  "DOB":"1971-05-09",
  //  "mobile":"0543451311",
  //  "eMail":"test1.pikel@gmail.com",
  //  "Children":"12",
  //  "CSN":"031734399",
  //  "marriageStatus":"רווק",
  //  "additionalAnnIncome":"5000",
  //  "netWorth":"13000",
  //  "processStartDate":"2021-01-01",
  //  "processEndDate":"2021-01-01"
  //  }

  const SubmitData = () => {
    const data = {
      firstName: firstname,
      lastName: lastname,
      DOB: dob,
      mobile: mobile,
      marriageStatus: marriage_status,
      eMail: email,
      Children: noc,
      CSN: csn,
      additionalAnnIncome: annual_income,
      netWorth: networth,
      additionalSourceofIncome: additional_soi,
      processStartData: "2021-01-01",
      processEndDate: "2021-01-01",
    };

    console.log(data);
  };

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [marriage_status, setmarriage_status] = useState("single");
  const [dob, setdob] = useState("");
  const [noc, setnoc] = useState("");
  const [id_number, setid_number] = useState("");
  const [annual_income, setannual_income] = useState("");
  const [networth, setnetworth] = useState("");
  const [csn, setcsn] = useState("");
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
                type="date"
                label="Date of Birth"
                placeholder="04/12/1989"
                height={56}
                value={dob}
                setvalue={setdob}
              />
            </InputContainerLeft>
            <SelectComponent
              label="Marriage Status"
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
            <InputContainerLeft>
              <Input
                type="email"
                label="Email"
                placeholder="test1.pikel@gmail.com"
                height={56}
                value={email}
                setvalue={setemail}
              />
            </InputContainerLeft>
            <InputContainerLeft>
              <Input
                type="text"
                label="Mobile No."
                placeholder="0543451311"
                height={56}
                value={mobile}
                setvalue={setmobile}
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
                label="Net Worth"
                placeholder="13000"
                height={56}
                value={networth}
                setvalue={setnetworth}
              />
            </InputContainerRight>

            <InputContainerRight>
              <Input
                type="text"
                label="CSN"
                placeholder="031734399"
                height={56}
                value={csn}
                setvalue={setcsn}
              />
            </InputContainerRight>
            <InputContainerRight></InputContainerRight>
            <InputContainerRight>
              <Input
                type="text"
                label="Additional Annual Income"
                placeholder="5000"
                height={56}
                value={annual_income}
                setvalue={setannual_income}
              />
            </InputContainerRight>
          </FInputFields>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
              width: "100%",
            }}
          >
            <Multiselect
              label="Additional Source of Income"
              value={additional_soi}
              setvalue={setadditional_soi}
            />
          </div>
        </FinancialDetails>
      </Details>
    </AddClientContainer>
  );
};

export default AddClient;
