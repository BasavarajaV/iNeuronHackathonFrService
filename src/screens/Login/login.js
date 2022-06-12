import React, { useEffect, useState } from "react";
import blogging from "./../../assets/img/blogging.svg";
import { useNavigate } from "react-router-dom";
import authStore from "./../../app/authStore";
import shallow from "zustand/shallow";
import Loader from "../../components/loader";

const Login = () => {
  localStorage.setItem("isAuth", false);
  const [state, setState] = useState({ username: "", password: "" });
  const authenticateUser = authStore((state) => state.fetch);
  const resetError = authStore((state) => state.resetError);
  const { loading, error, userDetails } = authStore((state) => state, shallow);
  console.log("userDetails====>", userDetails);

  useEffect(() => {
    console.log("userDetails====>", userDetails, error);
    if (userDetails?.access_token) {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", userDetails.access_token);
      navigate("../", { replace: true });
    } else {
      if (error) {
        alert("Username or Password is incorrect");
        resetError();
      }
    }
  }, [userDetails, error]);

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log("event===>", event);
    event.preventDefault();
    authenticateUser(state);
  };
  const isDisable = !(state.username && state.password);

  return (
    <div className="flex justify-center	items-center w-full h-screen">
      {loading && (
        <div className="w-full h-screen flex justify-center items-center absolute">
          <Loader />
        </div>
      )}
      <div className="flex flex-row h-4/6 rounded-lg ">
        <div className="w-96 h-full bg-blue-700 rounded-l-lg">
          <img src={blogging} alt="google" className=" mt-10 " />
        </div>
        <div className="w-96 h-full bg-slate-50 rounded-r-lg flex items-center flex-col justify-center	">
          <h1 className="text-2xl	font-bold mb-3 text-stone-600		">Login</h1>
          <form
            className="flex flex-col w-80 justify-center"
            onSubmit={(event) => (isDisable ? {} : handleSubmit(event))}
          >
            <input
              value={state.username}
              onChange={(val) =>
                setState({ ...state, username: val.target.value })
              }
              name="username"
              type="text"
              className="mb-5 p-2 border-2 border-gray-300 rounded-lg w-full"
              placeholder="Enter Username"
            />
            <input
              value={state.password}
              onChange={(val) =>
                setState({ ...state, password: val.target.value })
              }
              name="password"
              type="password"
              className="mb-5 p-2 border-2 border-gray-300 rounded-lg w-full"
              placeholder="Enter Password"
            />
            <button
              className={`px-20 py-2 ${
                isDisable ? "bg-slate-300	" : "bg-blue-700"
              } text-center rounded-lg text-white`}
              disabled={isDisable}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
