import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaReddit } from "react-icons/fa";
import "./header.css";
import SearchTerm from "../../features/searchTerm/SearchTerm";

const Header = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <FaReddit className="logo-icon" />
          <p>
            Reddit<span>Minimal</span>
          </p>
        </div>
        <SearchTerm>
          <HiOutlineSearch />
        </SearchTerm>
      </div>
    </header>
  );
};

export default Header;
