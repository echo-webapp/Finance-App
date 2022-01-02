import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter basename="Finance-App">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
