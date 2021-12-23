import { Fragment, useState } from "react";
import styled from "styled-components";
import Button from "./components/atoms/button";
import Header from "./components/molecules/header";
import Input from "./components/atoms/input";
import CustomerCard from "./components/molecules/customerCard";
const HomeContainer = styled("div")`
  background-color: var(--black);
  height: 100vh;
`;

const Test = () => {
  const [input, setinput] = useState("");

  return (
    <HomeContainer>
      {/* <Button
        title="Add new client"
        type="secondary"
        clickHandler={() => {}}
      ></Button>
      <Header
        heading="Your clientele"
        subheading="13 new client"
        buttonText="+ Add New Client"
      />
      <div style={{ width: 200, height: 30 }}>
        <Input
          type="text"
          placeholder="Some Input"
          label="Input Field"
          value={input}
          setvalue={setinput}
        />
      </div> */}
      <CustomerCard />
    </HomeContainer>
  );
};

export default Test;
