import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-[5vh] w-screen ">
      <div className="relative float-right w-1/2 h-full flex items-center justify-between">
        <input
          className="bg-gray-800 text-white w-[30%] h-10 border border-white"
          placeholder="Search"
        />
        <div className="h-14 w-14 mr-10 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
