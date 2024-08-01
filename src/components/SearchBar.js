import React, { useState } from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar-container">
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        fullWidth
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
