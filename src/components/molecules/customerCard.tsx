import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
const MainContainer = styled("div")`
  padding: 24px;
  width: 388.32px;
  height: 131.11px;
  background: var(--white);
  box-shadow: 0px 4.00332px 4.00332px rgba(0, 0, 0, 0.25);
  border-radius: 31.5294px;
  display: flex;
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

const CustomerCard = () => {
  return (
    <MainContainer>
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
        U
      </Avatar>
      <SubContainer>
        <SubId>aditya@gmail.com</SubId>
        <SubName>Kristin Watson</SubName>
        <SubHeader>
          <SubNew>New</SubNew>
          <SubJob>CEO | Infotech</SubJob>
        </SubHeader>
      </SubContainer>
    </MainContainer>
  );
};

export default CustomerCard;
