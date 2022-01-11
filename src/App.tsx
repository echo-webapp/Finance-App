import React, { useEffect } from "react";
import { Fragment } from "react";
import Routes from "./routes";
import GlobalDarkTheme from "./themeDark";
import GlobalLightTheme from "./themeLight";
import { useDispatch } from "react-redux";
import { SetToken } from "./store/Reducers/Auth";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import ThemeSwitch from "./components/atoms/themeSwitch";

const Theme = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
`;

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  if (localStorage.getItem("token")) {
    const val = localStorage.getItem("token");
    dispatch(SetToken(val));
  }

  return (
    <Fragment>
      <ToastContainer />
      {theme ? <GlobalDarkTheme /> : <GlobalLightTheme />}
      <Theme>
        <ThemeSwitch />
        
      </Theme>
      <Routes />
    </Fragment>
  );
};

export default App;
