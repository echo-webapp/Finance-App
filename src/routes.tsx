import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Test from "./test";
import AddClient from "./pages/client/addclient";
import Source from "./pages/source/source";
import AddSource from "./pages/AddSource/addSource";
import NotFound from "./pages/PageNotFound/notFound";
import Transaction from "./pages/allTransactions/alltransactions";
import Allsources from "./pages/source/allsources";
import EditSource from "./pages/editSource/editsource";

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
        <Route exact path="/transactions" component={Transaction} />
        <Route exact path="/allsources/:id" component={Allsources} />
        <Route exact path="/editsource/:id" component={EditSource} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Router;
