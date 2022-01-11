import React from "react";
import styled from "styled-components";
import { Divider } from "@mui/material";
const Container = styled.div`
  display: flex;
  position: relative;
  width: 1062px;
  height: 483px;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 27px;
`;
const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubLeftContainer = styled.div`
  width: 70%;
`;
const SubLeftContainer1 = styled.div`
  /* margin-top: 35px; */
  width: 70%;
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const CenterContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const SubContainerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 18px;
  color: #999999;
  margin-bottom: 25px;
`;
const SubContainerItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
const SubContainerItem1 = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #343a40;
`;
const SubContainerItem2 = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #343a40;
`;
const Header = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 40px;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 35px;
`;
const ClientDetails = ({ clientDetails }: any) => {
  return (
    <Container>
      <LeftContainer>
        <SubLeftContainer>
          <SubContainerHeader>Financial details</SubContainerHeader>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.CSN}</SubContainerItem2>
            <SubContainerItem1>CSN</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.netWorth}</SubContainerItem2>
            <SubContainerItem1>Net worth</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>
              {clientDetails.processStartDate}
            </SubContainerItem2>
            <SubContainerItem1>Process start</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>
              {clientDetails.processEndDate}
            </SubContainerItem2>
            <SubContainerItem1>Process end</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.netWorth}</SubContainerItem2>
            <SubContainerItem1>Additional annual income</SubContainerItem1>
          </SubContainerItem>
        </SubLeftContainer>
      </LeftContainer>
      <CenterContainer>
        <Divider orientation="vertical" />
      </CenterContainer>
      <RightContainer>
        <Header>
          {clientDetails.firstName} {clientDetails.lastName}
        </Header>
        <SubLeftContainer1>
          <SubContainerHeader>Personal details</SubContainerHeader>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.city}</SubContainerItem2>
            <SubContainerItem1>City</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.eMail}</SubContainerItem2>
            <SubContainerItem1>Email</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.gender}</SubContainerItem2>
            <SubContainerItem1>Gender</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.DOB}</SubContainerItem2>
            <SubContainerItem1>Date of birth </SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.status}</SubContainerItem2>
            <SubContainerItem1>Marriage status</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.children}</SubContainerItem2>
            <SubContainerItem1>No. of children</SubContainerItem1>
          </SubContainerItem>
          <SubContainerItem>
            <SubContainerItem2>{clientDetails.mobile}</SubContainerItem2>
            <SubContainerItem1>Mobile Number</SubContainerItem1>
          </SubContainerItem>
        </SubLeftContainer1>
      </RightContainer>
    </Container>
  );
};

export default ClientDetails;
