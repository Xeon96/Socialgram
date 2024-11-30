import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form className="m-4 flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full text-white input rounded-full bg-gray-800"
      />
      <button className=" btn btn-md btn-circle btn-accent">
        <FaSearch className="w-4 h-4 outline-none"/>
        </button>
    </form>
  );
};

export default SearchBar;
