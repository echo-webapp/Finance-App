import { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Fragment>
  );
};

export default Router;
