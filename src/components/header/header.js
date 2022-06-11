import React from "react";
import avatar from "./../../assets/img/avatar.svg";

function Header() {
  //header bar
  return (
    <div>
      <div className="w-full h-10 bg-blue-700 flex justify-between p-5 items-center">
        <span className="text-white">Hello XYZ</span>
        <img src={avatar} alt="google" className="w-6 h-6  " />
      </div>
    </div>
  );
}

export default Header;
