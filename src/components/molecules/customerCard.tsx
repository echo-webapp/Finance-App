import { Avatar } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SetCustomer } from "../../store/Reducers/client";
import { useDispatch } from "react-redux";
const MainContainer = styled("div")`
  padding: 24px;
  width: 388.32px;
  height: 131.11px;
  background: var(--white);
  box-shadow: 0px 4.00332px 4.00332px rgba(0, 0, 0, 0.25);
  border-radius: 31.5294px;
  display: flex;
  margin: 12px;
  transition: ease-in all 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const SubContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 76%;
  padding-left: 5px;
`;
const SubId = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 12.6222px;
  color: var(--black);
`;
const SubName = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: var(--black);
  font-weight: 500;
  font-size: 25.2444px;
`;
const SubHeader = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const SubNew = styled("div")`
  width: 56px;
  height: 22px;
  background: #fda600;
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubJob = styled("div")`
  height: 22px;
  font-weight: 500;
  font-size: 12.6222px;
  color: var(--grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const CustomerCard = ({ data }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allClients = useSelector((state: RootState) => {
    return state.customerList.customer;
  });
  const clickHandler: any = (id: any) => {
    console.log("fgiogdfgdfhg");
    if (data["new_Client"] === true) {
      console.log("fgiodfhg");
      const temp = {
        ...data,
      };
      let result = [];
      temp["new_Client"] = false;
      const t1: any = [...allClients];
      for (let i = 0; i < t1.length; i++) {
        if (t1[i].ID === temp.ID) {
          result.push(temp);
        } else {
          result.push(t1[i]);
        }
      }
      dispatch(SetCustomer(result));
    }
    history.push(`/source/${id}`);
  };
  return (
    <MainContainer
      onClick={() => {
        clickHandler(data.ID);
      }}
    >
      <Avatar
        style={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
          height: "83px",
          width: "83px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          fontSize: "40px",
        }}
      >
        {data.firstName[0]}
      </Avatar>
      <SubContainer>
        <SubId>{data.eMail}</SubId>
        <SubName>
          {data.firstName} {data.lastName}
        </SubName>
        <SubHeader>
          {data["new_Client"] === true && <SubNew>New</SubNew>}
          <SubJob>{data.DOB}</SubJob>
        </SubHeader>
      </SubContainer>
    </MainContainer>
  );
};

export default CustomerCard;
