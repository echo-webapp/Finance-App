import React from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import { Ink } from "../../components/vectors";
const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--black);
  width: 100%;
  min-height: 100vh;
`;
const AddText = styled.div`
  font-weight: 500;
  font-size: 35.102px;
  text-align: center;
  color: #ffffff;
`;
const NoSource = () => {
  return (
    <AddClientContainer>
      <Header
        heading="Transaction details"
        subheading="@WW24"
        buttonText="+ Add a Source"
        buttonHandler={() => {
          console.log("Add a new income source");
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <Ink width="272px" height="342px" />
      </div>
      <AddText>You have’nt added any income source, add a source </AddText>
    </AddClientContainer>
  );
};

export default NoSource;
