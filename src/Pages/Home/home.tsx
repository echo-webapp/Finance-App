import React from "react";
import { useDispatch } from "react-redux";
import { RemoveToken } from "../../store/Reducers/Auth";
const Home = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        dispatch(RemoveToken());
      }}
    >
      Logout
    </button>
  );
};

export default Home;
