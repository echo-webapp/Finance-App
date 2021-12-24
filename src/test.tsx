import { Fragment, useState } from "react";
import styled from "styled-components";
import Button from "./components/atoms/button";
import Header from "./components/molecules/header";
import Input from "./components/atoms/input";
import CustomerCard from "./components/molecules/customerCard";
import { useDispatch } from "react-redux";
import { RemoveToken } from "./store/Reducers/Auth";
import Circle from "./components/atoms/circle";
import NewCustomer from "./components/molecules/newCustomer";

const HomeContainer = styled("div")`
  background-color: var(--black);
  height: 100vh;
`;

const Test = () => {
  const [input, setinput] = useState("");
  console.log("hello in sde");

  const somefunc = () => {
    console.log("clicked");
  };

  return (
    <HomeContainer>
      <Button
        title="Add new client"
        type="secondary"
        clickHandler={() => {}}
        padding="20px 20px"
      />

      {/* <Button
        title="Add new client"
        type="secondary"
        clickHandler={() => {}}
    <Fragment>
      <Button
        title="Add new client"
        type="secondary"
        padding="30px 40px"
        clickHandler={somefunc}
      ></Button>
      <Header
        heading="Your clientele"
        subheading="13 new client"
        buttonText="+ Add New Client"
        buttonHandler={() => {
          return null;
        }}
      />
      <div style={{ width: 200 }}>
        <Input
          type="text"
          placeholder="Some Input"
          label="Input Field"
          value={input}
          setvalue={setinput}
          height={30}
        />
      </div> */}
      <NewCustomer />
    </HomeContainer>
  );
};

export default Test;
