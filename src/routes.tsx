import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Test from "./test";
import AddClient from "./pages/client/addclient";
import Source from "./pages/source/source";
import AddSource from "./pages/AddSource/addSource";
import NotFound from "./pages/PageNotFound/notFound";


const Router = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/addclient" component={AddClient} />
        <Route exact path="/source/:id" component={Source} />
        <Route exact path="/addsource/:id" component={AddSource} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Router;
