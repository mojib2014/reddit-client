import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaReddit } from "react-icons/fa";
import SearchTerm from "../../features/searchTerm/SearchTerm";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FaReddit className="logo-icon" />
        <p>
          Reddit<span>Minimal</span>
        </p>
      </div>
      <SearchTerm>
        <HiOutlineSearch />
      </SearchTerm>
    </header>
  );
};

export default Header;
