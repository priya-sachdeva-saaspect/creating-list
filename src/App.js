import React, { useState } from "react";
import ContentGrid from "./components/ContentGrid";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://test.create.diagnal.com/images/Back.png"
          alt="Back"
          className="header-icon"
        />
        <h1 className="App-title">Romantic Comedy</h1>
        <img
          src="https://test.create.diagnal.com/images/search.png"
          alt="Search"
          className="header-icon"
          onClick={toggleSearch}
        />
      </header>
      {isSearchVisible && <SearchBar onSearch={handleSearch} />}
      <ContentGrid searchQuery={searchQuery} />
    </div>
  );
}

export default App;
