import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/molecules/header";
import CustomerCard from "../../components/molecules/customerCard";
import { get_AllClients } from "../../api/client";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SvgSearch from "../../components/vectors/Search";
import { useHistory } from "react-router";
const AddClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--black);
  width: 100%;
  min-height: 100vh;
`;
const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  width: 70%;
  height: 110px;
  border-bottom: 1px solid #adb5bd;
`;
const SubHeader1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SubHeaderT1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 206px;
  height: 48px;
  background: #ffffff;
  border-radius: 106px;
  font-weight: 500;
  font-size: 16px;
  color: #343a40;
  margin-left: 40px;
`;
const SubHeaderInput = styled.input`
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 483px;
  height: 67px;
  margin-left: 40px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 51px;
  font-weight: 500;
  font-size: 18px;
  color: var(--white);
  text-align: right;
  padding: 16px;
  padding-right: 65px;
  ::placeholder {
    color: var(--white);
  }
`;
const InputContainer = styled.div`
  position: relative;
  div {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 40px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  padding: 22px;
`;
const Home = () => {
  const history = useHistory();
  const [allClients, setAllClients] = useState([]);
  const token = useSelector((state: RootState) => {
    return state.isAuth.isAuth;
  });
  useEffect(() => {
    const genResult = async () => {
      const res = await get_AllClients(token);
      setAllClients(res);
    };
    genResult();
  }, []);
  const AddClient = () => {
    history.push("/addclient");
  };
  return (
    <AddClientContainer>
      <Header
        heading="Your clientele"
        subheading="13 active clients"
        buttonText="+ Add New Client"
        buttonHandler={AddClient}
      />
      <SubHeader>
        <SubHeader1>
          <SubHeaderT1>Active clients (13)</SubHeaderT1>
          <InputContainer>
            <SubHeaderInput placeholder="Search...." />
            <div>
              <SvgSearch />
            </div>
          </InputContainer>
        </SubHeader1>
      </SubHeader>
      <CardContainer>
        {allClients?.map((data: any) => {
          return <CustomerCard />;
        })}
      </CardContainer>
    </AddClientContainer>
  );
};

export default Home;
