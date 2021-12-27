import React from "react";
import Header from "../../components/molecules/header";
import styled from "styled-components";
import { Ink } from "../../components/vectors";
import { useHistory } from "react-router";
const AddClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const AddText1 = styled.div`
  font-weight: 500;
  font-size: 25.102px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;
const NotFound = () => {
  const history = useHistory();
  return (
    <AddClientContainer>
      <Ink width="272px" height="342px" />
      <AddText>Page Not Found !</AddText>
      <AddText1
        onClick={(e) => {
          history.push("/");
        }}
      >
        Click Here To Go to Home Page
      </AddText1>
    </AddClientContainer>
  );
};

export default NotFound;
