import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Button from "../atoms/button";
const Text1 = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 18px;
  color: var(--black);
`;
const Text2 = styled.div`
  font-weight: normal;
  font-size: 55px;
  color: var(--black);
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 516px;
  height: 385px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 27px;
`;

const NewCustomer = () => {
  const history = useHistory();
  return (
    <MainContainer>
      <Text1>New client added !</Text1>
      <Text2>Username@27_#</Text2>
      <div style={{ marginTop: "30px" }}>
        <Button
          title="Go to manager dashboard"
          type="secondary"
          padding="25px 30px"
          clickHandler={() => {
            history.push("/");
          }}
        ></Button>
      </div>
    </MainContainer>
  );
};

export default NewCustomer;
