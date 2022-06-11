import React from "react";
import blogging from "./../../assets/img/blogging.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("../", { replace: true });
  };
  return (
    <div className="flex justify-center	items-center w-full h-screen">
      <div className="flex flex-row h-4/6 rounded-lg ">
        <div className="w-96 h-full bg-blue-700 rounded-l-lg">
          <img src={blogging} alt="google" className=" mt-10 " />
        </div>
        <div className="w-96 h-full bg-slate-50 rounded-r-lg flex items-center flex-col justify-center	">
          <h1 className="text-2xl	font-bold mb-3 text-stone-600		">Login</h1>
          <form
            className="flex flex-col w-80 justify-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              className="mb-5 p-2 border-2 border-gray-300 rounded-lg w-full"
              placeholder="Enter Username"
            />
            <input
              type="password"
              className="mb-5 p-2 border-2 border-gray-300 rounded-lg w-full"
              placeholder="Enter Password"
            />
            <button
              className="px-20 py-2 bg-blue-700 text-center rounded-lg text-white"
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
