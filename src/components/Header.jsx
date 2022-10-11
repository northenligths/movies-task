import React, { useState } from "react";
import { BiMoviePlay } from "react-icons/bi";
import axios from "axios";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-2">
      <div className="flex items-center space-x-2">
        <h1 className="text-white font-bold text-2xl">Movies</h1>
        <BiMoviePlay className="block sm:visible sm:text-white sm:text-3xl sm:font-bold" />
      </div>
      <input
        type="search"
        placeholder="Search..."
        className="w-60 px-2 py-2 sm:px-4 sm:mr-2 xl:px-4 xl:w-96 xl:py-2 rounded-md"
      />
    </div>
  );
};

export default Header;
