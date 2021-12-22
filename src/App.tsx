import { Fragment } from "react";
import Routes from "./routes";
import { GlobalStyle } from "./theme";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
};

export default App;
