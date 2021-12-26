import { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Test from "./test";
import Client from "./pages/client/client";
import AddClient from "./pages/client/addclient";
import Source from "./pages/source/source";
import AddSource from "./pages/AddSource/addSource";
const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/client" component={Client} />
      <Route exact path="/addclient" component={AddClient} />
      <Route exact path="/source/:id" component={Source} />
      <Route exact path="/addsource/:id" component={AddSource} />
    </Fragment>
  );
};

export default Router;
