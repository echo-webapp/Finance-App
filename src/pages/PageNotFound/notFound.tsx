import React from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import { Ink } from "../../components/vectors";
import { useHistory } from "react-router";
import NotFound from "./../../components/vectors/NotFound";
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
  margin-top: 40px;
`;
const AddText1 = styled.div`
  font-weight: 500;
  font-size: 35.102px;
  text-align: center;
  color: #ffffff;
`;
const NoSource = () => {
  const history = useHistory();
  return (
    <AddClientContainer>
      <Header
        heading="Ooops !"
        subheading="@WW24"
        buttonText="Go to Home Page"
        buttonHandler={() => {
          history.push("/");
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <NotFound />
      </div>
      <AddText>This page is not available</AddText>
      <AddText1>It seems something went wrong....</AddText1>
    </AddClientContainer>
  );
};

export default NoSource;
