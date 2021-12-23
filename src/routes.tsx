import { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Test from "./test";
const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/test" component={Test} />
    </Fragment>
  );
};

export default Router;
