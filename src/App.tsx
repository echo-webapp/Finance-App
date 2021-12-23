import React, { useEffect } from "react";
import { Fragment } from "react";
import Routes from "./routes";
import { GlobalStyle } from "./theme";
import { useDispatch } from "react-redux";
import { SetToken } from "./store/Reducers/Auth";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useHistory } from "react-router";
const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => {
    return state.isAuth.isAuth;
  });
  if (localStorage.getItem("token")) {
    const val = localStorage.getItem("token");
    dispatch(SetToken(val));
  }
  // useEffect(() => {
  //   if (!token) {
  //     history.push("/login");
  //   }
  // }, [token]);
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
};

export default App;
