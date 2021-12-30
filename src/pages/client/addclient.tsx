import { useState } from "react";
import styled from "styled-components";
import Input from "../../components/atoms/input";
import SelectComponent from "../../components/atoms/select";
import Header from "../../components/molecules/header";
import { create_Client } from "../../api/create";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Modal from "@mui/material/Modal";
import NewCustomer from "../../components/molecules/newCustomer";
import Backdrop from "@mui/material/Backdrop";
import { SetCustomer } from "../../store/Reducers/client";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SvgArrowleft from "../../components/vectors/Arrowleft";
import { useHistory } from "react-router";

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
  width: 1400px;
  max-width: 1500px;
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

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  width: 80%;
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

const AddClient = () => {
  const dispatch = useDispatch();
  const [token, allClients]: any = useSelector((state: RootState) => {
    return [state.isAuth.isAuth, state.customerList.customer];
  });
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const SubmitData = async () => {
    const data: any = {
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
      processStartData: "2021-01-01",
      processEndDate: "2021-01-01",
    };

    const arr = Object.keys(data);
    for (let i = 0; i < arr.length; i++) {
      if (data[arr[i]] === "") {
        toast.warning("Please Fill all the Details");
        return;
      }
    }

    const res = await create_Client(data, token);
    const res1 = res[res.length - 1];
    console.log(res1, allClients);
    res1.new_Client = true;
    const new_res = [res1, ...allClients];
    dispatch(SetCustomer(new_res));
    handleOpen();
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

  return (
    <AddClientContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
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
        <NewCustomer firstname={firstname} lastname={lastname} />
      </Modal>
      <Header
        heading="Clientele details"
        subheading="Add new"
        buttonText="Submit data"
        buttonHandler={SubmitData}
      />
      <SubHeader>
        <SubHeader1>
          <div onClick={() => history.push("/")} className="arrow-left">
            <SvgArrowleft color="white" />
          </div>
        </SubHeader1>
      </SubHeader>
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
        </FinancialDetails>
      </Details>
    </AddClientContainer>
  );
};

export default AddClient;
