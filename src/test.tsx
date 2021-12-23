import { Fragment, useState } from "react";
import styled from "styled-components";
import Button from "./components/atoms/button";
import Header from "./components/molecules/header";
import Input from "./components/atoms/input";

const HomeContainer = styled("div")``;

const Test = () => {
  const [input, setinput] = useState("");

  return (
    <Fragment>
      {/* <Button title="Add new client" type="secondary"></Button> */}
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
      </div>
    </Fragment>
  );
};

export default Test;
