import { useState } from "react";
import "./login.css";
import { login } from "../../api/login";
import { Google } from "../../components/vectors";
import Input from "../../components/atoms/input";
import SvgLine2 from "../../components/vectors/Line2";
import Button from "../../components/atoms/button";
import { useDispatch } from "react-redux";
import { SetToken } from "../../store/Reducers/Auth";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useHistory } from "react-router";
import Circle from "../../components/atoms/circle";

const Login: any = () => {
  const history = useHistory();
  const token = useSelector((state: RootState) => {
    return state.isAuth.isAuth;
  });
  if (token) {
    history.push("/");
  }
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clickHandler: any = async () => {
    if (email === "") return;
    if (password === "") return;
    const data = await login(email, password);
    if (Array.isArray(data)) {
      console.log(data[0].Token);
      localStorage.setItem("token", data[0].Token);
      dispatch(SetToken(data[0].Token));
      return;
    }
  };

  return (
    <div className="login-MainContainer">
      <div
        className="login-Container"
        style={{
          minHeight: "700px",
        }}
      >
        <div className="login-circle">
          <div className="login-circle-dark">
            <Circle color="dark" size="large" />
          </div>
          <div className="login-circle-light">
            <Circle color="light" size="large" />
          </div>
        </div>
        <div className="login-Header">
          <div className="login-text-1">Login</div>
          <div className="login-text-2">Welcome back !</div>
        </div>
        <div className="Login-email">
          <div style={{ width: "80%" }}>
            <Input
              type="email"
              placeholder="pandey27nilesh@gmail.com"
              label="Email"
              value={email}
              setvalue={setEmail}
              height={56}
            />
          </div>
        </div>

        <div className="Login-password">
          <div style={{ width: "80%" }}>
            <Input
              type="password"
              placeholder=""
              label="Password"
              value={password}
              setvalue={setPassword}
              height={56}
            />
          </div>
        </div>

        <div className="Login-button"></div>

        <Button
          title="Login"
          type="secondary"
          clickHandler={clickHandler}
          padding="24px 170px"
        ></Button>
      </div>
    </div>
  );
};

export default Login;
