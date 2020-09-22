import React, { useState } from "react";
import "./style.css";

/**
 * @LauriPechbrenner
 * @function Logo
 **/

const Logo = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Input");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className="logo">
      
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Suche" />
          <img
            onClick={openSearch}
            className="searchIcon"
            src={require("../../assets/icons/search.svg")}
            alt="search"
            id="searchIcon"
          />
        </form>
      </div>
    </div>
  );
};

export default Logo;
