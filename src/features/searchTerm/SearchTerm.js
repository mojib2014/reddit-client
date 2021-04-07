import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "./searchTermSlice";

const SearchTerm = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") return;
    dispatch(setSearchTerm(query.toLowerCase()));
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="search"
        name={query}
        value={query}
        onChange={(e) => handleChange(e)}
        placeholder="Ex: Aviation/Music..."
        aria-label="Search categories"
      />
      <FaSearch className="search-icon" onClick={handleSubmit} />
    </form>
  );
};

export default SearchTerm;
