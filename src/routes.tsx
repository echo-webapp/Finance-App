import { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";

const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Fragment>
  );
};

export default Router;