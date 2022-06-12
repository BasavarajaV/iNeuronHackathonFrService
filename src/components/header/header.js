import React from "react";
import avatar from "./../../assets/img/avatar.svg";
import authStore from "./../../app/authStore";

function Header() {
  const userData = authStore((state) => state.userDetails);

  return (
    <div>
      <div className="w-full h-10 bg-blue-700 flex justify-between p-5 items-center">
        <span className="text-white">{`Hello ${userData.name}`}</span>
        <img src={avatar} alt="google" className="w-6 h-6  " />
      </div>
    </div>
  );
}

export default Header;
