import React from "react";
import Router from "./routes";
import { GlobalStyle } from "./theme";
import Login from "./Pages/Login/login";
function App() {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
}

export default App;
