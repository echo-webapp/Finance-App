import React from "react";
import "./login.css";
// import * as S from "./styles";
import { login } from "../api/login";

const Login: any = () => {
  return (
    <div className="login-MainContainer">
      <div className="login-Container">
        <div className="login-Header">
          <div className="login-text-1">Login</div>
          <div className="login-text-2">Welcome back !</div>
        </div>
        <div className="login-Google">
          <button
            className="login-Google1"
            onClick={() => {
              login("yuval.pikel@gmail.com", 123456);
            }}
          >
            Login with Google
          </button>
        </div>
        <div className="login-Email">Using your Email</div>
      </div>
    </div>
  );
};

export default Login;
