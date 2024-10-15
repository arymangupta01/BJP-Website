import React, { useState } from "react";
import { Link } from "react-router-dom";

const UsersPageNav = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="w-full h-[70px] bg-[#F5821F] relative z-50 flex items-center justify-between shadow-xl ">
      <Link to="/">
        <div>
          <img
            className="px-4 py-1 w-[350px]"
            src="https://www.bjp.org/membership/img/bjp/logo-logo-inner.png"
            alt=""
          />
        </div>
      </Link>

      <div className="relative">
        <div
          className="w-[40px] h-[40px] m-4 rounded-full bg-gray-700 cursor-pointer flex items-center justify-center"
          onClick={toggleDropdown}
        >
          <h1 className="text-white">A</h1>
        </div>
        <div className="absolute left- bottom-[15px] right-[18px] w-[10px] h-[10px] bg-green-500 rounded-full border-2 border-white">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
        </div>

        {isDropdownVisible && (
          <div className="absolute right-0 mt-1 w-42  bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="flex flex-col py-3">
              <li className="px-4 py-1 cursor-pointer">Profile</li>
              <li className="px-4 py-1cursor-pointer">Account</li>
              <li className="px-4 py-1 cursor-pointer">Dashboard</li>
              <Link to="/">
                <li className="px-4 cursor-pointer">Logout</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPageNav;
