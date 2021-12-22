import React, { Fragment } from "react";
import { Route } from "react-router";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
const Router = () => {
  return (
    <Fragment>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Fragment>
  );
};

export default Router;
