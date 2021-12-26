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
import SvgAnimate from "./components/vectors/Animate";
import PhysicalCard_small from "./components/molecules/physicalCard_small";
import PhysicalCard_large from "./components/molecules/physicalCard_large";
import BankaccountCard from "./components/molecules/bankaccount_card";
import ClientDataGrid from "./components/molecules/clientDataGrid";

const HomeContainer = styled("div")`
  background-color: var(--black);
  min-height: 100vh;
  z-index: 100;
`;
const columns: any = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: any) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows: any = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Test = () => {
  const [input, setinput] = useState("");
  console.log("hello in sde");

  const somefunc = () => {
    console.log("clicked");
  };

  return (
    <HomeContainer>
      {/* <Button
        title="Add new client"
        type="secondary"
        clickHandler={() => {}}
        padding="20px 20px"
      /> */}

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
      <div style={{ marginTop: 100 }}></div>
      <div style={{ marginLeft: 100 }}>
        <NewCustomer />
      </div>
      <div
        style={{ marginLeft: 300, marginTop: 300, display: "flex", gap: 20 }}
      >
        {/* <PhysicalCard_small theme="dark" /> */}
        <PhysicalCard_large theme="light" />
      </div>

      <PhysicalCard_small theme="dark" />
      {/* <div style={{ marginLeft: 300, marginTop: 300 }}>
        <BankaccountCard theme="light" size="small" />
      </div>
      <div style={{ marginLeft: 300, marginTop: 300, paddingBottom: 300 }}>
        <BankaccountCard theme="dark" size="small" />
      </div> */}
      <ClientDataGrid columns={columns} rows={rows} />
      <div
        style={{
          marginLeft: 300,
          marginTop: 300,
          paddingBottom: 300,
          display: "flex",
          gap: 20,
        }}
      >
        {/* <BankaccountCard theme="dark" size="small" /> */}
        <BankaccountCard theme="dark" size="large" />
        <BankaccountCard theme="light" size="large" />
      </div>
    </HomeContainer>
  );
};

export default Test;
